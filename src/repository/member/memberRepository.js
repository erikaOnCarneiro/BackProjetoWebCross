import connection from "../../database/connection.js";

export async function MemberRegistration(member) {
    let insertMemberQuery = `insert into Aluno(nome, cpf, nascimento, genero, email, telefone, 
                                                  endereco, foto, observacoes, dataRegistro, 
                                                  statusAluno) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;


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
                                                                  member.dataRegistro,
                                                                  member.statusAluno]);
    return info.insertId;
    } catch (err) {
        console.error('Erro ao inserir o aluno no banco de dados:', err);  
        throw new Error('Erro ao inserir o aluno no banco de dados.');
    }
}

export async function MemberList() {
    const memberList = `select * from Aluno`;
    let[listRegister] = await connection.query(memberList)
    return listRegister;
}

