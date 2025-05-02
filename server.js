import "dotenv/config.js";
import express from "express";
import addRoutesServices from "./src/router/routes.js";

//RECEBENDO A V G DO SERVIDOR
const PORT = process.env.PORT;

//CRIANDO V SERVIDOR
const SERVER = express();

//CONFIG PARA USAR PARAMENTRO BODY
SERVER.use(express.json());

//ADD ROTAS 
addRoutesServices(SERVER);

//INICIANDO SERVIDOR
SERVER.listen(PORT, ()=>{
console.log(`O servidor subiu na porta ${PORT}`);
});