import express from 'express';
import dotenv from 'dotenv';


const Servidor = express();
const PORTA = process.env.PORTA

Servidor.use(AlunoRouter);

Servidor.listen(
    PORTA,
    () => console.log('API subida com sucesso' +PORTA)
)

