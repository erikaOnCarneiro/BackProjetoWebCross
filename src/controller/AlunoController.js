import { Router } from 'express';

const endpoints = Router();

endpoints.get('/aluno/listar', async (req, resp) =>{
    let registros = await listar();
    resp.send(registros);
})