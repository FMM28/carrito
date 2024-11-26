import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";

const rutaProteger = async (req, res, next) => {
  const { _token } = req.cookies;

  if (!_token) {
    return res.redirect("/"); // Redirigir si no hay token
  }

  try {
    const decoded = jwt.verify(_token, process.env.SC_JWT);

    const usuario = await Usuario.scope("eliminarClave").findByPk(decoded.id);

    if (!usuario) {
      return res.redirect("/"); // Redirigir si el usuario no existe
    }

    req.usuario = usuario; // Almacenar usuario en `req`
    next(); // Continuar al siguiente middleware
  } catch (error) {
    console.error("Error en rutaProteger:", error.message);
  }
};

export default rutaProteger;
