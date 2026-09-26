const express = require("express");
const alunoController = require("../controllers/AlunoController");
const validarAluno = require("../middlewares/validarAluno");
const validarQuery = require("../middlewares/validarQuery");
const validarParams = require("../middlewares/validarParams");
const validarAlunoPatch = require("../middlewares/validarAlunoPatch");

const router = express.Router();

router.get("/", validarQuery ,(request, response, next)=>{
    console.log("Esse middleware está executando antes do controller!");
    next();
}, alunoController.findMany);

router.get("/:id" , validarParams, alunoController.findUnique);

router.post("/", validarAluno, alunoController.create);

router.put("/:id", validarAluno, validarParams, alunoController.updateDados);
router.patch("/:id" , validarAlunoPatch, validarParams, alunoController.updateDados);


module.exports = router;