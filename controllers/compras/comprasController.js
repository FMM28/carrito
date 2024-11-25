import db from "../../config/db.js";

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
        res.render('Usuario/tickets', {
            tickets,
            currentPage: page,
            totalPages,
            csrfToken: req.csrfToken(),
        });
    } catch (error) {
        console.error('Error al obtener los tickets del usuario:', error);
        res.status(500).send('Error en el servidor');
    }
};

export { mostrarTicketsUsuario };



