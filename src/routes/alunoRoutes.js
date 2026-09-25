const express = require("express");
const alunoController = require("../controllers/AlunoController");
const validarAluno = require("../middlewares/validarAluno");
const validarQuery = require("../middlewares/validarQuery");

const router = express.Router();

router.get("/", validarQuery ,(request, response, next)=>{
    console.log("Esse middleware está executando antes do controller!");
    next();
}, alunoController.findMany);


router.post("/", validarAluno, alunoController.create);

module.exports = router;