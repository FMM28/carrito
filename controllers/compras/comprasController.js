import db from "../../config/db.js";
import Producto from "../../models/Producto.js";
import Ticket from "../../models/Ticket.js";
import TicketProducto from "../../models/TicketProducto.js"

const mostrarTicketsUsuario = async (req, res) => {
    try {
        // Consulta SQL para obtener los tickets del usuario
        const tickets = await db.query(
            `SELECT 
                t.id_ticket,
                t.fecha,
                t.hora,
                t.total
            FROM 
                tickets t
            WHERE 
                t.id_usuario`,
            { type: db.QueryTypes.SELECT,});

        // Renderizar la vista con datos
        res.render('compras', {
            csrf: req.csrfToken(),
            tickets,
        });
    } catch (error) {
        console.error('Error al obtener los tickets del usuario:', error);
        res.status(500).send('Error en el servidor');
    }
};

const comprar = async (req,res) =>{
    const { carrito, carrito_total, user } = req.session;

    if (!carrito || carrito.length === 0) {
        req.flash("error", "El carrito está vacío.");
        return res.redirect(req.get('Referer'));
    }

    if(!user){
        req.flash("error", "Inicia sesion antes de comprar");
        return res.redirect('/users/login');
    }

    try {
        // Crear un nuevo ticket
        const nuevoTicket = await Ticket.create({
            id_usuario: user,
            total: carrito_total,
        });

        // Procesar cada producto en el carrito
        for (const item of carrito) {
            const producto = await Producto.findOne({ where: { id_producto: item.id_producto } });

            // Verificar stock
            if (producto.stock < item.cantidad) {
                req.flash(
                    "error",
                    `Stock insuficiente para el producto ${item.nombre}.`
                );
                return res.redirect(req.get('Referer'));
            }

            // Crear relación Ticket-Producto
            await TicketProducto.create({
                id_ticket: nuevoTicket.id_ticket,
                id_producto: item.id_producto,
                cantidad: item.cantidad,
                precio: item.precio, // Precio individual del producto
            });

            // Actualizar stock del producto
            await producto.update({ stock: producto.stock - item.cantidad });
        }

        // Limpiar carrito
        req.session.carrito = [];
        req.session.carrito_total = 0;

        req.flash("success", "Compra registrada exitosamente.");
        return res.redirect(req.get('Referer'));
    } catch (error) {
        console.error("Error al registrar la compra:", error);
        req.flash("error", "Ocurrió un error al procesar la compra.");
        return res.redirect(req.get('Referer'));
    }
}

export { mostrarTicketsUsuario, comprar };



