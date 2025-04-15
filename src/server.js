import express from 'express';
import 'dotenv/config.js';

const Servidor = express();
const PORTA = process.env.PORTA

Servidor.listen(
    PORTA,
    () => console.log('API subida com sucesso' +PORTA)
)

