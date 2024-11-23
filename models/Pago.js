import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Ticket from "./Ticket.js";

export const Pago = db.define(
    "pagos",
    {
        id_pago:{
            type:Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_ticket:{
            type:Sequelize.INTEGER,
            allowNull: false,
        },
        forma_pago:{
            type: Sequelize.ENUM('efectivo','tarjeta','transferencia'),
            allowNull: false,
        },
        pago:{
            type: Sequelize.DECIMAL(10,2),
            allowNull: false,
            validate:{
                min: 0,
            }
        }
                
    },
    {timestamps:false}
);


Pago.belongsTo(Ticket,{
    foreignKey:{
        name: "id_ticket"
    }
});

Ticket.hasOne(Pago,{
    foreignKey:{
        name: 'id_ticket',
    }
});

export default Pago