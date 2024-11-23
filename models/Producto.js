import { Sequelize } from "sequelize";
import Juego from "./Juego.js";
import Plataforma from "./Plataforma.js";
import db from "../config/db.js";

export const Producto = db.define(
    'productos',
    {
        id_producto:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_juego:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        id_plataforma:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        precio:{
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                min: 0,
            },

        },
        stock:{
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate:{
                min: 0,
            },
        },
    }
)

Juego.belongsTo(Producto, {
    foreignKey: {
        name: 'id_juego',
    },
});

Plataforma.belongsTo(Producto,{
    foreignKey:{
        name: 'id_plataforma',
    },
});

Producto.hasOne(Juego,{
    foreignKey:{
        name: 'id_juego',
    },
});

Producto.hasOne(Plataforma,{
    foreignKey:{
        name:'id_plataforma',
    }
})

export default Producto