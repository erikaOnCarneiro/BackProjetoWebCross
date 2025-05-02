import memberController from "../controller/memberController.js"

export default function addRoutesServices(SERVER){
    SERVER.use(memberController);
}