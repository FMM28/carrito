import express from "express";
import { accionMostrarXbox,accionMostrarNintendo,accionMostrarPsp,agregarCarrito } from "../controllers/Producto/productoController.js";

const router_plataformas = express.Router()

router_plataformas.get('/xbox',accionMostrarXbox)
router_plataformas.get('/nintendo',accionMostrarNintendo)
router_plataformas.get('/psp',accionMostrarPsp)
router_plataformas.post('/agregarCarrito',agregarCarrito)


export default router_plataformas