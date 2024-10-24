import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Usuarios = db.define(
    "usuarios",
    {
        id_usuario:{
            type:Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre:{
            type:Sequelize.STRING,
        },
        ap_paterno:{
            type: Sequelize.STRING,
        },
        ap_materno:{
            type: Sequelize.STRING,
        },
        email:{
            type: Sequelize.STRING,
        },
        telefono:{
            type: Sequelize.STRING
        }        
    },
    {timestamps:false}
);

export default Usuarios;