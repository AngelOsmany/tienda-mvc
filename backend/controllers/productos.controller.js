import { producto_modelo } from "../models/productos.model.js";

export const test_producto = ()=>{
    console.log("Funciona la conexion con el controlador del producto")
}
producto_modelo.create({
    nombre:"Palomitas",
    departamento:"Botanas",
    cantidad:523
})