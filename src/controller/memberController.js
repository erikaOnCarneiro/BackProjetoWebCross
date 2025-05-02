import { MemberRegistration } from "../repository/memberRepository.js";
import { Router } from "express";

const endpointMemberRegistration = Router();

endpointMemberRegistration.post('/register/member', async (req, res) => {
    try {
        let member = req.body; 
        let newId = await MemberRegistration(member); 
        res.send({ newId });
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
});

export default endpointMemberRegistration;