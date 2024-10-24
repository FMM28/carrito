import express from "express";
import AccionMostrarMisCompras from "../controllers/TicketProducto/TicketProductoController.js";

const router_MisCompras = express.Router()

//ruta de mis compras
router_MisCompras.get("/verMisCompras", AccionMostrarMisCompras)

export default router_MisCompras;