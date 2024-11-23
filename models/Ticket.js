import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Usuario from "./Usuarios.js";

export const Ticket = db.define(
    "tickets",
    {
        id_ticket:{
            type:Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_usuario:{
            type:Sequelize.INTEGER,
            allowNull: false,
        },
        fecha:{
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue:Sequelize.literal('CURRENT_DATE'),
        },
        hora:{
            type: Sequelize.TIME,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIME'),
        },
        total:{
            type: Sequelize.DECIMAL(10,2),
            allowNull: false,
            validate:{
                min: 0,
            }
        }
                
    },
    {timestamps:false}
);

Ticket.belongsTo(Usuario,{
    foreignKey:{
        name:"id_usuario"
    }
});

Usuario.hasMany(Ticket,{
    foreignKey:{
        name: 'id_usuario',
    }
});

export default Ticket