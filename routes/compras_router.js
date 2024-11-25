import express from 'express';
import {mostrarTicketsUsuario} from '../controllers/compras/comprasController.js'

const router = express.Router()

router.get('/totalTicketsUsuarios', mostrarTicketsUsuario)

export default router