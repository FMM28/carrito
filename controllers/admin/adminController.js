import db from '../../config/db.js';
import Ticket from '../../models/Ticket.js';
import Usuario from '../../models/Usuario.js';
import Producto from '../../models/Producto.js';
import { Op } from 'sequelize';

const mostrarTickets = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const offset = (page - 1) * limit;

    try {
        // Consulta SQL para obtener tickets con datos del usuario
        const tickets = await db.query(
            `SELECT 
                t.id_ticket,
                u.username,
                CONCAT(u.nombre, ' ', u.ap_paterno, ' ', IFNULL(u.ap_materno, '')) AS usuario,
                t.fecha,
                t.hora,
                t.total
            FROM 
                tickets t
            JOIN 
                usuarios u ON t.id_usuario = u.id_usuario
            LIMIT :limit OFFSET :offset`,
            {
                replacements: { limit, offset },
                type: db.QueryTypes.SELECT,
            }
        );

        // Consulta para contar el total de tickets
        const totalTickets = await db.query(
            `SELECT COUNT(*) AS total FROM tickets`,
            { type: db.QueryTypes.SELECT }
        );

        const totalPages = Math.ceil(totalTickets[0].total / limit);

        // Renderizar la vista con datos
        res.render('Admin/tickets', {
            csrf: req.csrfToken(),
            tickets,
            currentPage: page,
            totalPages,
        });
    } catch (error) {
        console.error('Error al obtener los tickets:', error);
        res.status(500).send('Error en el servidor');
    }
};

const eliminarTicket = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await Ticket.destroy({
            where: { id_ticket: id },
        });

        if (deleted) {
            console.log(`Ticket con ID ${id} eliminado correctamente.`);
            res.redirect('/admin/tickets');
        } else {
            console.log(`No se encontró el ticket con ID ${id}.`);
            res.status(404).send('Ticket no encontrado.');
        }
    } catch (error) {
        console.error('Error al eliminar el ticket:', error);
        res.status(500).send('Error en el servidor.');
    }
};

const mostrarProductosTicket = async (req, res) => {
    const { id_ticket } = req.params;

    try {
        // Consulta SQL para obtener los productos del ticket
        const productos = await db.query(
            `SELECT 
                j.nombre AS nombre_juego,
                j.imagen AS imagen_juego, 
                tp.cantidad, 
                tp.precio
            FROM 
                ticket_productos tp
            JOIN 
                productos p ON tp.id_producto = p.id_producto
            JOIN 
                juegos j ON p.id_juego = j.id_juego
            WHERE 
                tp.id_ticket = :id_ticket`,
            { 
                replacements: { id_ticket }, 
                type: db.QueryTypes.SELECT 
            }
        );

        // Renderizar la vista
        res.render('Admin/productos', {
            csrf: req.csrfToken(),
            ticket: { id_ticket },
            productos,
        });
    } catch (error) {
        console.error('Error al obtener los productos del ticket:', error);
        res.status(500).send('Error en el servidor');
    }
};

const mostrarFormularioAltaAdmin = (req, res) => {
    try {
        
        res.render('Admin/altaAdmin', {
            csrf: req.csrfToken(), 
        });
    } catch (error) {
        console.error('Error al cargar el formulario de alta de administrador:', error);
        res.status(500).send('Error en el servidor');
    }
};

const darAltaAdmin = async (req, res) => {
    const username = req.body.username || req.body.nombre_usuario;

    if (!username) {
        console.error('El nombre de usuario no fue proporcionado.');
        return res.status(400).send('Debe proporcionar un nombre de usuario.');
    }

    try {
        const usuario = await Usuario.findOne({
            where: {
                [Op.or]: [
                    { username: username },
                    { nombre: username }
                ]
            }
        });

        if (!usuario) {
            console.error(`Usuario no encontrado: ${username}`);
            return res.status(404).send('Usuario no encontrado.');
        }

        usuario.rol = 'admin';
        await usuario.save();

        console.log(`Usuario actualizado: ${username} es ahora administrador.`);
        res.redirect('/admin/altaAdmin?success=1');
    } catch (error) {
        console.error('Error al actualizar el rol del usuario:', error);
        res.status(500).send('Error en el servidor.');
    }
};

const mostrarProductos = async (req, res) => {
    try {
        // Realizamos la consulta para obtener productos con el nombre del juego y la plataforma asociada
        const productos = await db.query(
            `SELECT 
                p.id_producto, 
                j.nombre AS nombre_juego,
                p.precio,
                p.stock,
                pl.nombre AS plataforma
            FROM 
                productos p
            JOIN 
                juegos j ON p.id_juego = j.id_juego
            JOIN 
                plataformas pl ON p.id_plataforma = pl.id_plataforma`,
            {
                type: db.QueryTypes.SELECT // Esto es si estás usando Sequelize para manejar consultas SQL
            }
        );

        // Renderizamos la vista y pasamos los productos y el CSRF Token
        res.render('Admin/listaProductos', {
            csrf: req.csrfToken(),  // Incluye el token CSRF para seguridad
            productos: productos         // Pasamos los productos con la información del juego y plataforma
        });
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).send('Error en el servidor');
    }
};

const aumentarStock = async (req, res) => {
    const { id_producto } = req.params; // ID del producto que se va a actualizar

    try {
        // Encuentra el producto por su ID
        const producto = await Producto.findByPk(id_producto); // Si usas Sequelize

        if (!producto) {
            console.log(`Producto con ID ${id_producto} no encontrado.`);
            return res.status(404).send('Producto no encontrado.');
        }

        // Aumenta el stock en 1
        producto.stock += 1;
        await producto.save(); // Guarda el cambio

        console.log(`Stock del producto con ID ${id_producto} aumentado.`);
        res.redirect('/admin/stock'); // Redirige a la lista de productos o cualquier otra página
    } catch (error) {
        console.error('Error al aumentar el stock:', error);
        res.status(500).send('Error en el servidor');
    }
};

export {
    mostrarTickets,
    eliminarTicket,
    mostrarProductosTicket,
    mostrarFormularioAltaAdmin,
    darAltaAdmin,
    mostrarProductos,
    aumentarStock 
};
