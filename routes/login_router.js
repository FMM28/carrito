import express from 'express';
import {inicioSesion,registrandoEnlace,registrando,credenciales,confirmarIncripcionEnlace,cerrarSesion} from '../controllers/login/loginController.js'

const router = express.Router()

router.get('/login',inicioSesion)
router.get('/registrar',registrandoEnlace)
router.post('/registrar',registrando)
router.post('/credenciales',credenciales)
router.get('/confirmarinscripcion/:token',confirmarIncripcionEnlace)
router.get('/logout',cerrarSesion)

export default router