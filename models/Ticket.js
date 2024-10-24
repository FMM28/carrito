import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Usuarios from "./Usuarios.js";

export const Tickets = db.define(
    "tickets",
    {
        id_ticket:{
            type:Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_usuario:{
            type:Sequelize.INTEGER,
        },
        fecha:{
            type: Sequelize.DATE,
        },
        hora:{
            type: Sequelize.TIME,
        }
                
    },
    {timestamps:false}
);

Usuarios.hasOne(Tickets,{
    foreignKey:{
        name: "id_usuario"
    }
});

Tickets.belongsTo(Usuarios,{
    foreignKey:{
        name:"id_usuario"
    }
});

export default Tickets