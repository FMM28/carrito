import express from 'express';
import csrf from 'csurf';
import { mostrarTickets, eliminarTicket, mostrarProductosTicket } from '../controllers/admin/adminController.js';

const router = express.Router();

// Middleware para CSRF
const csrfProtection = csrf({ cookie: true });

// Ruta para listar tickets con paginación
router.get('/tickets', csrfProtection, mostrarTickets)


// Ruta para eliminar un ticket
router.post('/tickets/delete/:id', csrfProtection, eliminarTicket)

router.get('/tickets/:id_ticket/productos', csrfProtection, mostrarProductosTicket)
export default router;
