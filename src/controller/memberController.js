import { Router } from "express"; 
import createMember from "../service/memerService.js";
import { MemberList } from "../repository/member/memberRepository.js";

const endpointMemberRegistration = Router();

endpointMemberRegistration.post('/register/member', async (req, res) => {
    try {
        let member = req.body; 
        let newId = await createMember(member); 
        res.send({ newId });
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
});

endpointMemberRegistration.get('/list/member', async (req, res) =>{
    try {
        let list = await MemberList();
        res.send(list);
    }catch(err){
        res.status(400).json({ erro: err.message });
    }
})

export default endpointMemberRegistration;