import express from 'express';
import { mostrarTickets, eliminarTicket, mostrarProductosTicket, darAltaAdmin, mostrarFormularioAltaAdmin, mostrarProductos, aumentarStock } from '../controllers/admin/adminController.js';
import rutaProteger from '../middleware/rutasProteger.js';

const router = express.Router();

// Ruta para listar tickets con paginación
router.get('/tickets', mostrarTickets)


// Ruta para eliminar un ticket
router.post('/tickets/delete/:id', eliminarTicket)

router.get('/tickets/:id_ticket/productos', mostrarProductosTicket)

router.get('/altaAdmin', mostrarFormularioAltaAdmin)
router.post('/altaAdmin', darAltaAdmin)

router.get('/stock', mostrarProductos)
router.post('/stock/aumentar-stock/:id_producto', aumentarStock);


export default router;
