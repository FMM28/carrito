import Producto from '../../models/Producto.js';
import db from "../../config/db.js";
import session from 'express-session';

async function consulta(plataforma) {
    let productos = await db.query(
        `SELECT * FROM productos WHERE plataforma = ?`,
        {
            replacements: [plataforma],
            model: Producto,
            mapToModel: true
        }
    );
    return productos;
}

const accionMostrarXbox = async (req, res) => {
    const productos = await consulta('xbox');
    const carrito = req.session.carrito || [];
    console.log(req.session.carrito);
    res.render('index', {
        plataforma: 'Xbox',
        productos: productos,
        carrito: carrito
    });
}

const accionMostrarNintendo = async (req, res) => {
    const productos = await consulta('nintendo');
    const carrito = req.session.carrito || [];
    res.render('index', {
        plataforma: 'Nintendo',
        productos: productos,
        carrito: carrito
    });
}

const accionMostrarPsp = async (req, res) => {
    const productos = await consulta('psp');
    const carrito = req.session.carrito || [];
    res.render('index', {
        plataforma: 'PSP',
        productos: productos,
        carrito: carrito
    });
}

const agregarCarrito = async (req, res) => {
    const producto = req.body;
    console.log(producto)

    if (!req.session.carrito) {
        req.session.carrito = [];
    }

    const productoExistente = req.session.carrito.find(item => item.id === producto.id);

    if (productoExistente) {
        return res.status(400).json({ message: 'El producto ya está en el carrito' });
    }

    req.session.carrito.push(producto);

    return res.status(200).json({ message: `Producto agregado al carrito ${req.session.carrito}`, carrito: req.session.carrito });
};


export { accionMostrarXbox, accionMostrarNintendo, accionMostrarPsp, agregarCarrito };
