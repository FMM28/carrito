import express from 'express';
import {inicioSesion,registrandoEnlace,registrando,credenciales,confirmarIncripcionEnlace} from '../controllers/login/loginController.js'

const router = express.Router()

router.get('/login',inicioSesion)
router.get('/registrar',registrandoEnlace)
router.post('/registrar',registrando)
router.post('/credenciales',credenciales)
router.get('/confirmarinscripcion/:token',confirmarIncripcionEnlace)

export default router