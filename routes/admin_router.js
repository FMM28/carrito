import express from 'express';
import db from '../config/db.js';
import Ticket from '../models/Ticket.js';
import csrf from 'csurf';

const router = express.Router();

// Middleware para CSRF
const csrfProtection = csrf({ cookie: true });

// Ruta para listar tickets con paginación
router.get('/tickets', csrfProtection, async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const offset = (page - 1) * limit;

    try {
        const { count, rows: tickets } = await Ticket.findAndCountAll({
            limit,
            offset,
        });

        const totalPages = Math.ceil(count / limit);

        // Pasa el token CSRF a la vista
        res.render('Admin/tickets', {
            tickets,
            currentPage: page,
            totalPages,
            csrfToken: req.csrfToken(),  // Genera el token CSRF
        });
    } catch (error) {
        console.error('Error al obtener los tickets:', error);
        res.status(500).send('Error en el servidor');
    }
});

// Ruta para eliminar un ticket
router.post('/tickets/delete/:id', csrfProtection, async (req, res) => {
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
});

export default router;
