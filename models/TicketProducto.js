import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Producto from "./Producto.js"

export const TicketProducto = db.define(
    "ticket_productos",
    {
        id_ticket_productos:{
            type:Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_ticket:{
            type:Sequelize.INTEGER,
        },
        id_producto:{
            type: Sequelize.INTEGER
        },
        cantidad:{
            type: Sequelize.INTEGER,
        }
                
    },
    {timestamps:false}
);

Producto.hasOne(TicketProducto,{
    foreignKey:{
        name: "id_producto",
    },
});

TicketProducto.belongsTo(Producto,{
    foreignKey:{
        name: "id_producto"
    }
})



export default TicketProducto