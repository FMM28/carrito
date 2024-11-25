import express from 'express';
import { mostrarTickets, eliminarTicket, mostrarProductosTicket, darAltaAdmin, mostrarFormularioAltaAdmin } from '../controllers/admin/adminController.js';
import rutaProteger from '../middleware/rutasProteger.js';

const router = express.Router();

// Ruta para listar tickets con paginación
router.get('/tickets', mostrarTickets)


// Ruta para eliminar un ticket
router.post('/tickets/delete/:id', eliminarTicket)

router.get('/tickets/:id_ticket/productos', mostrarProductosTicket)

router.get('/altaAdmin', mostrarFormularioAltaAdmin)
router.post('/altaAdmin', darAltaAdmin)

export default router;
