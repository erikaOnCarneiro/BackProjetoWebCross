//import { parse, isValid, format } from "date-fns";
//import { ptBR } from "date-fns/locale";
import Joi from "joi";
import { cpf } from "cpf-cnpj-validator";
import GenderEnum from "../constants/genderEnum.js";
import { memberRegistration } from "../repository/memberRepository.js";

// Esquemas Joi para validação
const cpfSchema = Joi.string().length(11).pattern(/^\d+$/).required();
const emailSchema = Joi.string().email().required();
const phoneSchema = Joi.string().pattern(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/).required();
//const birthSchema = Joi.string().pattern(/^\d{2}-\d{2}-\d{4}$/).required();


// Validação do nome
const validateName = (name) => {
    const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/;
    if (!regex.test(name)) {
        throw new Error("Nome inválido! O nome não pode conter números ou caracteres especiais.");
    }
}

// Validação do CPF
const validateCpf = (cpfInput) => {
    if (!cpfInput) throw new Error("CPF não pode ser undefined ou vazio.");

    const cpfValue = cpfInput.replace(/\D/g, ""); // expressão regular para aceitar digitor de 0-9 e tirar caracteres

    const { err } = cpfSchema.validate(cpfValue);
    if (err) throw new Error("Formato de CPF inválido.");

    if (!cpf.isValid(cpfValue)) throw new Error("CPF inválido.");
    return cpfValue;
}

// Validação do email
const validateEmail = (email) => {
    const { err } = emailSchema.validate(email);
    if (err) throw new Error("Email inválido!");
    return email;
}

// Validação do telefone
const validatePhone = (phone) => {
    const { err } = phoneSchema.validate(phone);
    if (err) throw new Error(err.details[0].message);
    return phone;
}

// Validação do gênero
const validateGender = (gender) => {
    console.log('Entrando na função validateGender. Valor de gender:', gender);  // Valor de 'gender' passado para a função

    // Verifica se o valor de gender está no enum
    if (!Object.values(GenderEnum).includes(gender)) {
        console.log('Gênero inválido:', gender); // Valor inválido
        throw new Error("Gênero inválido.");
    }

    console.log('Gênero válido:', gender);  // Gênero válido
    return gender;  // Retorna o valor numérico de gênero
}


//validação da data de nasicmento
/*const validateDateOfBirth = (birth) => {
    const { err } = birthSchema.validate(birth);

    if (err) {
      throw new Error("Data de nascimento no formato inválido. O formato correto é dd-MM-yyyy");
    }
  
    // Tentando parsear a data usando date-fns
    const date = parse(birth, 'dd-MM-yyyy', new Date());
  
    // Verificando se a data é válida
    if (!isValid(date)) {
      throw new Error('Data de nascimento inválida');
    }
  
    // Formatar a data no formato yyyy-MM-dd para enviar ao banco
    return format(date, 'yyyy-MM-dd');
  }

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
    
    
    
    validateName(member.nome);
    member.cpf = validateCpf(member.cpf);
    member.genero = validateGender(member.genero); 
    member.phone = validatePhone(member.telefone);
    member.email = validateEmail(member.email);
    member.statusAluno = validateStatusMember(member.statusAluno);
    //member.dataRegistro = memberRegistrationDate();
   // member.birth = validateDateOfBirth(member.nascimento);



    return await memberRegistration(member);
}

export default createMember;
