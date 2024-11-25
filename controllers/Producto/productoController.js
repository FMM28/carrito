import Producto from '../../models/Producto.js';
import Juego from '../../models/Juego.js';
import Plataforma from '../../models/Plataforma.js';
import db from "../../config/db.js";

async function consulta(plataforma) {
    const productos = await db.query(
        `SELECT id_producto, 
                j.nombre AS nombre, 
                precio, 
                stock, 
                imagen, 
                trailer, 
                pl.nombre AS plataforma 
         FROM plataformas AS pl 
         JOIN productos AS p ON pl.id_plataforma = p.id_plataforma 
         JOIN juegos AS j ON p.id_juego = j.id_juego 
         WHERE pl.nombre = ? and stock > 0`,
        {
            replacements: [plataforma],
            type: db.QueryTypes.SELECT
        }
    );

    return productos;
}

const accionMostrarXbox = async (req, res) => {
    const productos = await consulta('xbox');
    res.render('index', {
        csrf: req.csrfToken(),
        plataforma: 'Xbox',
        productos: productos
    });
}

const accionMostrarNintendo = async (req, res) => {
    const productos = await consulta('nintendo');
    res.render('index', {
        csrf: req.csrfToken(),
        plataforma: 'Nintendo',
        productos: productos
    });
}

const accionMostrarPsp = async (req, res) => {
    const productos = await consulta('PlayStation');
    res.render('index', {
        csrf: req.csrfToken(),
        plataforma: 'PlayStation',
        productos: productos
    });
}

const agregarCarrito = async (req, res) => {
    try {
        const { id_producto } = req.body;

        const producto = await Producto.findOne({
            where: { id_producto },
            include: [
                {
                    model: Juego,
                    as: 'juego', // Alias configurado en el modelo
                    attributes: ['nombre','imagen'],
                },
                {
                    model: Plataforma,
                    as: 'plataforma', // Alias configurado en el modelo
                    attributes: ['nombre'],
                },
            ],
        });

        if (!req.session.carrito) {
            req.session.carrito = [];
        }

        const productoExistente = req.session.carrito.find(
            item => item.id_producto === producto.id_producto
        );

        if (productoExistente) {
            productoExistente.cantidad = (productoExistente.cantidad || 1) + 1;
            return res.redirect(req.get('Referer'))
        }

        req.session.carrito.push({
            id_producto: producto.id_producto,
            nombre: producto.juego.nombre,
            precio: producto.precio,
            imagen: producto.juego.imagen,
            plataforma: producto.plataforma.nombre,
            cantidad: 1,
        });

        return res.redirect(req.get('Referer'))
    } catch (error) {
        console.error('Error al agregar al carrito:', error)
    }
};


export { accionMostrarXbox, accionMostrarNintendo, accionMostrarPsp, agregarCarrito };
