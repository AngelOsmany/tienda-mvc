import { cliente_esquema } from "./cliente.model.js";
import {model} from "mongoose"

export const clientesVIP_modelo= new model("Clientes VIP", cliente_esquema)