import connection from "../database/connection.js";

export async function MemberRegistration(member) {
    let insertMemberQuery = `insert into Aluno(nome, cpf, nascimento, genero, email, telefone, 
                                                  endereco,origem, foto, observacoes, dataRegistro, 
                                                  statusAluno) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    try{
        const [info] = await connection.query(insertMemberQuery, [member.nome, 
                                                                  member.cpf, 
                                                                  member.nascimento, 
                                                                  member.genero, 
                                                                  member.email,
                                                                  member.telefone,
                                                                  member.endereco,
                                                                  member.origem,
                                                                  member.foto,
                                                                  member.observacoes,
                                                                  member.dataRegistro,
                                                                  member.statusAluno]);
    return info.insertId;
    } catch (err) {
        console.error('Erro ao inserir o aluno no banco de dados:', err);  
        throw new Error('Erro ao inserir o aluno no banco de dados.');
    }
}

export async function MemberListar(member) {
    
}

