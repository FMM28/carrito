import express from "express";
import csrf from "csurf";
import cookieParser from "cookie-parser";
import db from './config/db.js'
import session from "express-session";
import flash from "connect-flash"

import router_inicio from './routes/inicio_router.js'
import router_plataformas from "./routes/plataformas_router.js";
import router_login from "./routes/login_router.js"
import router_compras from "./routes/compras_router.js"
import router_admin from "./routes/admin_router.js";


const app = express()

app.use(express.urlencoded({extended:true}))

app.use(cookieParser())
app.use(csrf({cookie:true}))

try{
    await db.authenticate()
    db.sync()
    console.log('Conexion exitosa a la bd')
}catch(error){
    console.log(error)
}

app.set('view engine','pug')
app.set('views','./views')

app.use(express.static('public'))

app.use(session({
    secret: 'huhbds98hnvw7',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.json());
app.use(flash()); 

app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    res.locals.rol = req.session.rol || null;
    res.locals.carrito = req.session.carrito || [];
    res.locals.messages = req.flash();
    next();
});

// rutas
app.use('/',router_inicio)
app.use('/productos',router_plataformas)
app.use('/users',router_login)
app.use('/compras',router_compras)
app.use('/admin',router_admin)

const port = 2800
app.listen(port,()=>{
    console.log(`Esperando peticion en el puerto ${port}`)
})