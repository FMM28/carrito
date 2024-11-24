import express from 'express';
import {inicioSesion} from '../controllers/login/loginController.js'

const router = express.Router()

router.get('/login',inicioSesion)

export default router