import { Router } from "express"; 
import createMember from "../service/memerService.js";
import { memberList, memberDeleteById } from "../repository/memberRepository.js";

const endpointMemberRegistration = Router();

endpointMemberRegistration.post('/register/member', async (req, res) => {
    try {
        let member = req.body; 
        console.log('Valor recebido de member:', member); 
        let newId = await createMember(member); 
        res.send({ newId });
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
});

endpointMemberRegistration.get('/list/member', async (req, res) =>{
    try {
        let list = await memberList();
        res.send(list);
    }catch(err){
        res.status(400).json({ erro: err.message });
    }
});

endpointMemberRegistration.delete('/delete/:idAluno', async (req, res) => {
    try {
        let idMember = req.params.idAluno;
          const deleteCount = await memberDeleteById(idMember);
        res.send(deleteCount);
    }catch(err){
        res.status(400).json({ erro: err.message });
    }
    
});

export default endpointMemberRegistration;