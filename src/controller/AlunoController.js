import { Router } from 'express';
import * as AlunoService from '../service/AlunoService.js';

const endpoints = Router();

endpoints.get('/aluno/listar', async (req, resp) => {
    try {
        const registros = await AlunoService.listarAlunos();
        if (registros.length === 0) 
        return resp.status(404).send({ mensagem: 'Nenhum registro localizado.' });

        return resp.status(200).send(registros);

    } catch (error) {
        console.error('Erro ao listar alunos: ', error);
        return resp.status(500).send({ mensagem: 'Erro interno no registro ao listar alunos.' });
    }
});

endpoints.get('aluno/:params', async (req, res) => {
    try {
        const param = req.params.params;
        const resposta = await AlunoService.buscarAlunoPorIdOuCpf(param);
        if (!resposta) return res.status(404).send({ erro: 'Aluno não encontrado' });
        res.send(resposta);
    } catch (error) {
        res.status(500).send({ erro: error.message });
    }
});
