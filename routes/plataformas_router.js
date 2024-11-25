import express from "express";
import { accionMostrarXbox,accionMostrarNintendo,accionMostrarPsp,agregarCarrito,actualizarCarrito } from "../controllers/Producto/productoController.js";

const router_plataformas = express.Router()

router_plataformas.get('/xbox',accionMostrarXbox)
router_plataformas.get('/nintendo',accionMostrarNintendo)
router_plataformas.get('/psp',accionMostrarPsp)
router_plataformas.post('/agregarCarrito',agregarCarrito)
router_plataformas.post('/actulizarCarrito',actualizarCarrito)

export default router_plataformas