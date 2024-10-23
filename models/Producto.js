import { Sequelize } from "sequelize";
import db from "../config/db";

export const Producto = db.define(
    'productos',
    {
        id_producto:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        plataforma:{
            type: Sequelize.STRING,
        },
        nombre:{
            type: Sequelize.STRING,
        },
        precio:{
            type: Sequelize.DECIMAL(10, 2) 
        },
        imagen:{
            type: Sequelize.STRING,
        },
        trailer:{
            type: Sequelize.STRING,
        },
    }
)