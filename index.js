import express from "express";
import inicio from './routes/inicio_router.js'
import db from './config/db.js'

const app = express()

app.use(express.urlencoded({extended:true}))

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

app.use('/',inicio)

const port = 2800
app.listen(port,()=>{
    console.log(`Esperando peticion en el puerto ${port}`)
})