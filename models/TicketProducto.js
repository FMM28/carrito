import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Producto from "./Producto.js"
import Ticket from "./Ticket.js";

export const TicketProducto = db.define(
    "ticket_productos",
    {
        id_ticket_producto:{
            type:Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_ticket:{
            type:Sequelize.INTEGER,
            allowNull: false,
        },
        id_producto:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        cantidad:{
            type: Sequelize.INTEGER,
            allowNull: false,
            validate:{
                min: 0,
            }
        },
        precio:{
            type: Sequelize.DECIMAL(10,2),
            allowNull: false,
            validate:{
                min: 0,
            }
        }
                
    },
    {timestamps:false}
);


Producto.belongsTo(TicketProducto,{
    foreignKey:{
        name: "id_producto"
    }
});

Ticket.belongsTo(TicketProducto,{
    foreignKey:{
        name: 'id_ticket',
    }
});

TicketProducto.hasMany(Producto,{
    foreignKey:{
        name: 'id_producto', 
    }
});

TicketProducto.hasOne(Ticket,{
    foreignKey:{
        name: 'id_ticket',
    }
});

export default TicketProducto