import { Router } from 'express';

const endpoints = Router();

endpoints.get('/aluno/listar', async (req, resp) => {
    try {
        const registros = await listar();
        if (registros.length === 0) {
            return resp.status(404).send({ mensagem: 'Nenhum registro localizado.' });
        }

        return resp.status(200).send(registros);

    } catch (error) {
        console.error('Erro ao listar alunos: ', error);
        return resp.status(500).send({ mensagem: 'Erro interno no registro ao listar alunos.' });
    }
});