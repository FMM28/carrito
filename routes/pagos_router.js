import express from 'express';
import { procesarPago } from '../controllers/pagos/pagoController.js';

const router = express.Router()

router.post('/registro',procesarPago)

export default router
