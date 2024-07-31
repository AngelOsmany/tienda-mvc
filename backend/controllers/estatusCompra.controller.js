import { compra_modelo } from "../models/estatusCompra.model.js";

export const test_estatusCompra = ()=>{
    console.log("Funciona el controlador de estatus de compra")
}
compra_modelo.create({
    nombreCliente:"Osmany",
    tipoCompra:"Efectivo"
})