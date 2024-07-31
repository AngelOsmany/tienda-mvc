import { Schema, model } from "mongoose";

const compra_esquema = new Schema({
    nombreCliente:{
        type:String
    },
    tipoCompra:{
        type:String
    }
})
export const compra_modelo = new model("Tipo de compra", compra_esquema)