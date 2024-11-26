import express from 'express';
import {mostrarTicketsUsuario,comprar} from '../controllers/compras/comprasController.js'
import rutaProteger from '../middleware/rutasProteger.js';

const router = express.Router()

router.get('/',rutaProteger, mostrarTicketsUsuario)
router.post('/comprar',rutaProteger,comprar)

export default router