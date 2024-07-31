import { Schema, model } from "mongoose";

const producto_esquema = new Schema({
    nombre:{
        type:String
    },
    departamento:{
        type:String
    },
    cantidad:{
        type:Number
    }
})

export const producto_modelo = new model("Productos", producto_esquema)