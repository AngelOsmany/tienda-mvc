import { Schema, model } from "mongoose";

export const cliente_esquema = new Schema({
    nombre:{
        type:String
    },
    membresia:{
        type:String
    }
})

export const cliente_modelo = new model("Clientes", cliente_esquema)