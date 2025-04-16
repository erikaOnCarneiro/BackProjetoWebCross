import connection from './connection.js';

export async function listarAlunos() {
    let comando = `SELECT *  FROM tb_aluno`;
    try {
        const [registros] = await connection.query(comando);
        return registros;
    } catch (error) {
        console.error('Erro para listar os alunos no banco.', error);
        throw new Error(`Erro no banco ao listar aluno: ${error.messagem}`);
    }

}

export async function buscarAlunoPorIdOuCpf(param) {
    let comando;
    if (/^\d{11}$/.test(param)) {
        comando = `SELECT * FROM tb_aluno WHERE cpf = ?`; // Busca por CPF
    } else if (/^\d+$/.test(param)) {
        comando = `SELECT * FROM tb_aluno WHERE id = ?`; // Busca por ID
    } else {
        throw new Error('Parâmetro inválido. Forneça um ID numérico ou um CPF válido.');
    }
    try {
        const [registros] = await connection.query(comando, [param]);
        return registros[0];
    } catch (error) {
        console.error('Erro para buscar o id ou cpf do alunos no banco.', error);
        throw new Error('Erro ao interagir com o banco de dados.');
    }
}

export async function inserirAluno(aluno) {
    let comando = `INSERT INTO tb_aluno(nome, cpf, nascimento, genero, email, endereco, telefone, 
    origem, foto, observacoes, dataRegistro, statusAluno) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    try {
        const [info] = await connection.query(comando, [aluno.nome, aluno.cpf, aluno.nascimento,
        aluno.genero, aluno.email, aluno.endereco,
        aluno.telefone, aluno.origem, aluno.foto,
        aluno.observacoes, aluno.dataRegistro, aluno.statusAluno
        ]);

        return info.inserirId;

    } catch (error) {
        console.error('Erro ao inserir o aluno no banco.', error);
        throw new Error('Erro ao inserir o aluno banco de dados.');
    }
}

export async function alterarAluno(id, aluno) {
    let comando = `
      UPDATE tb_aluno SET
        nome = ?, cpf = ?, nascimento = ?, genero = ?, email = ?, endereco = ?, telefone = ?, 
        origem = ?, foto = ?, observacoes = ?, dataRegistro = ?, statusAluno = ?
      WHERE id = ?
    `;
    try {
        const [info] = await connection.query(comando, [aluno.nome, aluno.cpf, aluno.nascimento,
        aluno.genero, aluno.email, aluno.endereco,
        aluno.telefone, aluno.origem, aluno.foto,
        aluno.observacoes, aluno.dataRegistro, aluno.statusAluno,
            id
        ]);

        return info.affectedRows;
    } catch (error) {
        console.error('Erro ao alterar o aluno no banco.', error);
        throw new Error('Erro ao alterar o aluno banco de dados.');
    }
}

export async function removerAluno(id) {
    let comando = `DELETE FROM tb_aluno WHERE id = ?`;
    try {
        const [info] = await connection.query(comando, [id]);
        return info.affectedRows;
    } catch (error) {
        console.error('Erro ao remover o aluno no banco.', error);
        throw new Error('Erro ao remover o aluno banco de dados.');
    }
}
export async function buscarAlunoPorNome(nome) {
    let comando = `SELECT * FROM tb_aluno WHERE nome LIKE ?`;
    try {
        const [registros] = await connection.query(comando, [`%${nome}%`]);
        return registros;
    } catch (error) {
        console.error('Erro ao buscar o aluno por nome no banco.', error);
        throw new Error('Erro ao buscar o aluno por nome no banco de dados.');
    }
}
