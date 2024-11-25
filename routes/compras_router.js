import express from 'express';
import {mostrarTicketsUsuario} from '../controllers/compras/comprasController.js'

const router = express.Router()

router.get('/compras', mostrarTicketsUsuario)

export default router