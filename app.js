import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test_cliente } from "./backend/controllers/cliente.controller.js";
import { test_estatusCompra } from "./backend/controllers/estatusCompra.controller.js";
import { test_producto } from "./backend/controllers/productos.controller.js";
import { test_clientesVIP } from "./backend/controllers/clientesVIP.controller.js";

dotenv.config()
mongoose.connect(process.env.url)
.then(()=>{
    console.log("Funciono la conexion con la base de datos")
})
.catch((error)=>{
    console.log("Huvo un error en la conexion a la base de datos", error)
})

const app = express()
app.use(cors())

app.listen(4000, ()=>{
    console.log("Funciona el servidor local")
})


test_cliente()
test_clientesVIP()
test_estatusCompra()
test_producto()