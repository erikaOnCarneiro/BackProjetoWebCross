import connection from "../database/connection.js";

export async function memberRegistration(member) {
    let insertMemberQuery = `insert into Aluno(nome, cpf, nascimento, genero, email, telefone, 
                                                  endereco, foto, observacoes, statusAluno) 
                                                  values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;


//adicionar logica para o tratamento da data(nascimento/registro - automatico) - genero -
    try{
        const [info] = await connection.query(insertMemberQuery, [member.nome, 
                                                                  member.cpf, 
                                                                  member.nascimento, 
                                                                  member.genero, 
                                                                  member.email,
                                                                  member.telefone,
                                                                  member.endereco,
                                                                  member.foto,
                                                                  member.observacoes,
                                                                  member.statusAluno]);
    return info.insertId;
    } catch (err) {
        console.error('Erro ao inserir o aluno no banco de dados:', err);  
        throw new Error('Erro ao inserir o aluno no banco de dados.');
    }
}

export async function memberList() {
    const memberList = `select * from Aluno`;
    let[listRegister] = await connection.query(memberList)
    return listRegister;
}

export async function memberDeleteById(idMember) {
    const memberRemoveById = `DELETE FROM Aluno WHERE idAluno = ?`;
    let[deleteRegister] = await connection.query(memberRemoveById, [idMember]);
    return deleteRegister.affectedRows;
}

