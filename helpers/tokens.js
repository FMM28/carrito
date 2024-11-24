import jwt from "jsonwebtoken"
import dotenv from 'dotenv' 
dotenv.config({path: '.env'});

const idGenera = () => Math.random().toString(32).substring(2) + Date.now().toString(32);

const JWTGenera = (info)=> jwt.sign({
    id:info.id_usuario,
    nombre:info.username,
    }, process.env.SC_JWT,{
        expiresIn:'1d'
    })
export {
    idGenera, JWTGenera
}