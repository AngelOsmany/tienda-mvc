import { clientesVIP_modelo } from "../models/clientesVIP.model.js";

export const test_clientesVIP = ()=>{
    console.log("Funciona el controlador de clientes VIP")
}
clientesVIP_modelo.create({
    nombre:"Jessica",
    membresia:"VIP"
})