import { cliente_modelo } from "../models/cliente.model.js";

export const test_cliente = ()=>{
    console.log("Funciona el controlador de cliente")
}
cliente_modelo.create({
    nombre:"Osmany",
    membresia:"Estandar"
})