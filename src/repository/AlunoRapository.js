import connection from './connection.js';

export async function listarAlunos(){
    const comando = `SELECT *  FROM tb_aluno`;

    let [registros] = await connection.query(comando);
    return registros;
}

export async function buscarAlunoPorIdOuCpf(param) {
    const comando = `SELECT * FROM tb_aluno WHERE id = ?`;
    const [registros] = await connection.query(comando, [id]);
    return registros[0];
  }

export async function inserir(aluno){
    const comando = `INSERT INTO tb_aluno(nome, cpf, nascimento, genero, email, endereco, telefone, 
    origem, foto, observacoes, dataRegistro, statusAluno) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const [info] = await connection.query(comando, [nome.aluno, cpf.aluno, nascimento.aluno, 
                                                    genero.aluno, email.aluno, endereco.aluno, 
                                                    telefone.aluno, origem.aluno, foto.aluno, 
                                                    observacoes.aluno, dataRegistro.aluno, statusAluno.aluno])
    
    return info.inserirId;
}
