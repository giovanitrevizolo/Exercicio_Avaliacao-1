const ApiError = require("./ApiError");

class AlunoNaoEncontradoError extends ApiError{
    constructor(message="Aluno não encontrado", statusCode=400){
        super(message, statusCode);
    }
}

module.exports = AlunoNaoEncontradoError