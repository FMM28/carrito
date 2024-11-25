import db from '../../config/db.js';
import Ticket from '../../models/Ticket.js';

const mostrarTickets = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const offset = (page - 1) * limit;

    try {
        // Consulta SQL para obtener tickets con datos del usuario
        const tickets = await db.query(
            `SELECT 
                t.id_ticket,
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
            tickets,
            currentPage: page,
            totalPages,
            csrfToken: req.csrfToken(),
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
            ticket: { id_ticket },
            productos,
            csrfToken: req.csrfToken(),
        });
    } catch (error) {
        console.error('Error al obtener los productos del ticket:', error);
        res.status(500).send('Error en el servidor');
    }
};

export {
    mostrarTickets,
    eliminarTicket,
    mostrarProductosTicket
};