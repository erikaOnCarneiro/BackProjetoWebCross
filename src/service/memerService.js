//import { parse, isValid } from "date-fns";
//import { ptBR } from "date-fns/locale";
//import Joi from "joi";
//import { cpf } from "cpf-cnpj-validator";
//import GenderEnum from "../constants/genderEnum.js"; 
import { MemberRegistration } from "../repository/member/memberRepository.js";

// Esquemas Joi para validação
//const cpfSchema = Joi.string().length(11).pattern(/^\d+$/).required();
//const emailSchema = Joi.string().email().required();
//const phoneSchema = Joi.string().pattern(/^\(\d{2}\)\s\d{5}-\d{4}$/).required();


// Validação do nome
const validateName = (name) => {
    const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/;
    if (!regex.test(name)) {
        throw new Error("Nome inválido! O nome não pode conter números ou caracteres especiais.");
    }
}

// Validação do CPF
/*const validateCpf = (cpfValue) => {
    if (!cpfValue) throw new Error("CPF não pode ser undefined ou vazio.");

    cpfValue = cpfValue.replace(/\D/g, ""); // Remove pontos e traços

    const { error } = cpfSchema.validate(cpfValue);
    if (error) throw new Error("Formato de CPF inválido.");

    if (!cpf.isValid(cpfValue)) throw new Error("CPF inválido.");
}

// Validação do email
const validateEmail = (email) => {
    const { error } = emailSchema.validate(email);
    if (error) throw new Error("Email inválido!");
}

// Validação do telefone
const validatePhone = (phone) => {
    const { error } = phoneSchema.validate(phone);
    if (error) throw new Error("Telefone inválido! O formato correto é (XX) XXXXX-XXXX.");
}

// Validação do gênero
/*const validateGender = (gender) => {
    console.log('Valor recebido de gender:', gender);  // Para ver o valor exato
    const genderAsNumber = Number(gender);  // Converte para número
    console.log('Valor após conversão para número:', genderAsNumber);  // Para verificar a conversão
  
    // Verifica se a conversão foi bem-sucedida e se o número está no enum
    if (isNaN(genderAsNumber) || !Object.values(GenderEnum).includes(genderAsNumber)) {
      throw new Error("Gênero inválido.");
    }
  };*/


//validação da data de nasicmento
/*const validateDateOfBirth = (birth) => {
    if (!birth) throw new Error("Data de nascimento inválida.");

    let dateOfBirth;

    // Se for uma string, tenta converter para Date
    if (typeof birth === "string") {
        // Substitui as barras por hífens
        birth = birth.replace(/\//g, "-");

        // Tenta interpretar a data no formato dd-MM-yyyy
        const date = parse(birth, "dd-MM-yyyy", new Date(), { locale: ptBR });

        // Verifica se a data é válida
        if (!isValid(date)) {
            console.error("Data de nascimento inválida:", birth);
            throw new Error("Data de nascimento inválida.");
        }

        // A data foi convertida corretamente, então só formatamos para yyyy-MM-dd
        dateOfBirth = date;
    } else {
        throw new Error("Data de nascimento inválida.");
    }

    // Retorna a data no formato yyyy-MM-dd
    const formattedDate = dateOfBirth.toISOString().split("T")[0];

    return formattedDate;  // Retorna no formato yyyy-MM-dd
}
*/

// Data de registro do membro (gerada automaticamente)
/*const memberRegistrationDate = () => {
    return format(new Date(), "yyyy-MM-dd", { locale: ptBR });
}*/


// Validação do status do aluno

const validateStatusMember = (status) => {
    if (typeof status !== 'boolean') {
        throw new Error("Status inválido: deve ser um valor booleano.");
      }
      return status;
  }
// Criando membro e validando os dados
const createMember = async (member) => {

    member.statusAluno = validateStatusMember(member.statusAluno);
    validateName(member.nome);
    //validateCpf(member.cpf);
   // member.nascimento = validateDateOfBirth(member.dateOfBirth);
    //validateGender(member.gender);
    //validateEmail(member.email);
    //validatePhone(member.phone);
    //member.statusAluno = validateStatusMember(member.status);
    //member.dataRegistro = memberRegistrationDate();

   

    return await MemberRegistration(member);
}

export default createMember;
