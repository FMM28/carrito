import express from 'express';
import {mostrarTicketsUsuario,comprar, detalles} from '../controllers/compras/comprasController.js'
import rutaProteger from '../middleware/rutasProteger.js';

const router = express.Router()

router.get('/',rutaProteger, mostrarTicketsUsuario)
router.post('/comprar',rutaProteger,comprar)
router.post('/detalles', detalles)

export default router