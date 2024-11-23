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
        username:{
            type:Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        nombre:{
            type:Sequelize.STRING,
            allowNull: false,
        },
        ap_paterno:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        ap_materno:{
            type: Sequelize.STRING,
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        rol:{
            type: Sequelize.ENUM('user','admin'),
            defaultValue:'user',
        }        
    },
    {timestamps:false}
);

export default Usuarios;