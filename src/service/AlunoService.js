import * as alunoRepository from '../repository/alunoRepository.js';

export async function listarAlunos() {
    return await alunoRepository.listarAlunos();
}

export async function buscarAlunoPorIdOuCpf(param) {
    if (!param) throw new Error('ID ou CPF é obrigatório.');
    return await alunoRepository.buscarAlunoPorIdOuCpf(param);
}

export async function inserirAluno(aluno) {
    if (!aluno.nome || !aluno.cpf || !aluno.nascimento) {
        throw new Error('Nome, CPF e Nascimento são obrigatórios.');
    }

    return await alunoRepository.inserirAluno(aluno);
}

export async function alterarAluno(id, aluno) {
    if (!id) throw new Error('ID é obrigatório para alterar.');
    return await alunoRepository.alterarAluno(id, aluno);
}

export async function removerAluno(id) {
    if (!id) throw new Error('ID é obrigatório para remover.');
    return await alunoRepository.removerAluno(id);
}