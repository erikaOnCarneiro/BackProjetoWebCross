# BackProjetoWebCross

# Sistema de Gestão de box de Cross Funcional Alvorada
a ferramente utilizada para desenvolver o Back-end é o Node.js

Este projeto implementa um sistema completo de gerenciamento do box de Cross utilizando a arquitetura de camadas (Controller-Service-Validation-Utils) com Node.js. Ele permite o controle de alunos, mensalidades, login e administração financeira.

---

## 📁 Estrutura do Projeto
├── src
│   ├── controller
│   │   ├── AlunoController.js
│   │   ├── LoginController.js
│   │   ├── MensalidadeController.js
│   │   └── AdminController.js
│   
│   ├── services
│   │   ├── AlunoService.js
│   │   ├── LoginService.js
│   │   ├── MensalidadeService.js
│   │   └── FinanceiroService.js
│
│   ├── repository
│   │   ├── AlunoRepository.js
│   │   ├── LoginRepository.js
│   │   ├── MensalidadeRepository.js
│   │   └── connection.js
│
│   ├── utils
│   │   ├── ValidadorEmail.js
│   │   ├── ValidadorCPF.js
│   │   └── ConversorData.js
│
│   ├── routes
│   │   ├── alunoRoutes.js
│   │   ├── loginRoutes.js
│   │   └── mensalidadeRoutes.js
│
│   └── server
│       └── Server.js
│
├── .env