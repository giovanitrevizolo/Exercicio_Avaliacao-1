const { id } = require("zod/locales");
const alunoService = require("../services/AlunoService");

class AlunoController{
    
    async findMany(request, response){
        let {page, pageSize, orderBy, order} = request.query;
        
        const alunos = await alunoService.findMany(page, pageSize , order, orderBy);
        const totalAlunos = await alunoService.countTotal();

        return response.status(200).json({alunos , totalAlunos});
    }
    

    async create(request, response){
        try{
            const aluno = await alunoService.create(request.body);
            return response.status(201).json({aluno});
        }catch(error){
            return response.status(400).json({error: error.message});
        }
    }

}

module.exports = new AlunoController();