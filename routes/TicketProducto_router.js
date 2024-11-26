import express from "express";
import AccionMostrarTicketProducto from "../controllers/TicketProducto/TicketProductoController.js";

const router_MisCompras = express.Router()

//ruta de mis compras
router_MisCompras.get("/verMisCompras", AccionMostrarTicketProducto)

export default router_MisCompras;