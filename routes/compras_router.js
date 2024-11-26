import express from 'express';
import {mostrarTicketsUsuario,comprar, mostrarProductosTicket,mostrarPagos} from '../controllers/compras/comprasController.js'
import rutaProteger from '../middleware/rutasProteger.js';

const router = express.Router()

router.get('/',rutaProteger, mostrarTicketsUsuario)
router.get('/misCompras/:id_ticket', rutaProteger, mostrarProductosTicket)
router.post('/comprar',rutaProteger,comprar)
router.get('/pago/:id_ticket',mostrarPagos)
//router.post('/detalles', detalles)

export default router