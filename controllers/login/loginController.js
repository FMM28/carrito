import Usuario from "../../models/Usuario.js";
import { check, validationResult } from "express-validator";
import { correoRegistro } from "../../helpers/correos.js";
import { idGenera, JWTGenera } from "../../helpers/tokens.js";

const inicioSesion = (req, res) => {
  res.render("login", {
    csrf: req.csrfToken(),
  });
};

const registrandoEnlace = (req, res) => {
  res.render("registro", {
    csrf: req.csrfToken(),
  });
};

const registrando = async (req, res) => {
  let valido = await validacionFormulario(req);
  if (!valido.isEmpty()) {
    return res.render("registro", {
      csrf: req.csrfToken(),
      errores: valido.array(),
    });
  }
  const usuario = await Usuario.create({
    username: req.body.usuario,
    password: req.body.password,
    nombre: req.body.nombre,
    ap_paterno: req.body.ap_paterno,
    ap_materno: req.body.ap_materno,
    email: req.body.email,
    token: idGenera(),
  });
  await usuario.save();
  correoRegistro({
    nombre: usuario.nombre,
    correo: usuario.correo,
    token: usuario.token,
  });
  res.render("confirmacion", {
    csrf: req.csrfToken(),
  });
};

const confirmarIncripcionEnlace = async (req, res) => {
  const { token } = req.params;
  const usuario = await Usuario.findOne({
    where: { token },
  });
  if (!usuario) {
    res.render("confirmacion", {
      mensaje:
        "Lo lamentamos no se pudo confirmar la cuenta intentalo de nuevo",
    });
  }
  usuario.token = null;
  usuario.confirmar = true;
  await usuario.save();
  res.render("confirmacion", {
    mensaje: "Su cuenta se registro exitosamente",
  });
};

async function validacionFormulario(req) {
  await check("usuario")
    .notEmpty()
    .withMessage("Usuario no debe ser vacio")
    .run(req);
  await check("password")
    .notEmpty()
    .withMessage("Contraseña no debe ser vacio")
    .run(req);
  await check("nombre")
    .notEmpty()
    .withMessage("Nombre no debe ser vacio")
    .run(req);
  await check("ap_paterno")
    .notEmpty()
    .withMessage("Apellido Paterno no debe ser vacio")
    .run(req);
  await check("email")
    .notEmpty()
    .withMessage("Email no debe ser vacio")
    .run(req);
  let salida = validationResult(req);
  return salida;
}

const credenciales = async (req, res) => {
  let valido = await validacionFormularioInicio(req);
  if (!valido.isEmpty()) {
    return res.render("login", {
      csrf: req.csrfToken(),
      errores: valido.array(),
    });
  }
  const { username, password } = req.body;
  const us = await Usuario.findOne({ where: { username } });
  if (!us) {
    return res.render("login", {
      csrf: req.csrfToken(),
      errores: [{ msg: "El usuario no existe" }],
    });
  }
  if (!us.confirmar) {
    return res.render("login", {
      csrf: req.csrfToken(),
      errores: [{ msg: "Tu cuenta no tiene confirmación, revisa tu correo" }],
    });
  }
  if (!us.verificandoClave(password)) {
    return res.render("login", {
      csrf: req.csrfToken(),
      errores: [{ msg: "Credenciales no validas" }],
    });
  }

  const token = JWTGenera(us);
  console.log(us);
  console.log(token);
  return res
    .cookie("_token", token, {
      httpOnly: true,
    })
    .redirect("/");
};

async function validacionFormularioInicio(req) {
  await check("username")
    .notEmpty()
    .withMessage("El usuario no debe ser vacio")
    .run(req);
  await check("password")
    .notEmpty()
    .withMessage("Ingresa tu contraseña")
    .run(req);
  let salida = validationResult(req);
  return salida;
}

export {
  inicioSesion,
  registrandoEnlace,
  registrando,
  confirmarIncripcionEnlace,
  credenciales,
};
