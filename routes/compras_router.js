import express from 'express';
import {mostrarTicketsUsuario,comprar} from '../controllers/compras/comprasController.js'

const router = express.Router()

router.get('/compras', mostrarTicketsUsuario)
router.post('/comprar',comprar)

export default router