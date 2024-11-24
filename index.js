import express from "express";
import csrf from "csurf";
import cookieParser from "cookie-parser";
import db from './config/db.js'
import session from "express-session";

import inicio from './routes/inicio_router.js'
import router_plataformas from "./routes/plataformas_router.js";

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

// rutas
app.use('/',inicio)
app.use('/productos',router_plataformas)

const port = 2800
app.listen(port,()=>{
    console.log(`Esperando peticion en el puerto ${port}`)
})