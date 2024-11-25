import express from 'express';
import { mostrarTickets, eliminarTicket, mostrarProductosTicket, darAltaAdmin, mostrarFormularioAltaAdmin } from '../controllers/admin/adminController.js';
import rutaProteger from '../middleware/rutasProteger.js';

const router = express.Router();

// Ruta para listar tickets con paginación
router.get('/tickets',rutaProteger, mostrarTickets)


// Ruta para eliminar un ticket
router.post('/tickets/delete/:id',rutaProteger, eliminarTicket)

router.get('/tickets/:id_ticket/productos', rutaProteger, mostrarProductosTicket)

router.get('/altaAdmin', rutaProteger, mostrarFormularioAltaAdmin)
router.post('/altaAdmin', rutaProteger, darAltaAdmin)

export default router;
