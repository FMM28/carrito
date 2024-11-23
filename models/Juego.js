import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Juego = db.define(
    'juegos',
    {
        id_juego:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        imagen:{
            type: Sequelize.STRING,
            
        },
        trailer:{
            type: Sequelize.STRING,

        },
        
    }
)



export default Juego