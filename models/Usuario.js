import Sequelize from "sequelize";
import bcrypt from "bcrypt";
import db from "../config/db.js";

export const Usuario = db.define(
  "usuarios",
  {
    id_usuario: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ap_paterno: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ap_materno: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    rol: {
      type: Sequelize.ENUM("user", "admin"),
      defaultValue: "user",
    },
    confirmar: Sequelize.BOOLEAN,
    token: Sequelize.STRING,
  },
  {
    timestamps: false,
    hooks: {
      beforeCreate: async function (usuario) {
        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(usuario.password, salt);
      },
    },
    scopes: {
      eliminarClave: {
        attributes: {
          exclude: ["token", "password", "confirmar", "rol"],
        },
      },
    },
  }
);

Usuario.prototype.verificandoClave = function (password) {
  return bcrypt.compareSync(password, this.password);
};

export default Usuario;
