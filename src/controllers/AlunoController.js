const { id, tr } = require("zod/locales");
const alunoService = require("../services/AlunoService");

class AlunoController{
    
    async findMany(request, response){
        let {page, pageSize, orderBy, order} = request.query;
        
        const alunos = await alunoService.findMany(page, pageSize , order, orderBy);
        const totalAlunos = await alunoService.countTotal();

        return response.status(200).json({alunos , totalAlunos});
    }

    async findUnique(request, response){
        try{
            const {id} = request.params;
            const aluno = await alunoService.findUnique(id);
            return response.status(200).json({aluno});
        }
        catch(error){
            return response.status(404).json({erro : error.message})
        }
    }
    
    async updateDados(request, response){
        try{
            const {id} = request.params;
            const aluno = await alunoService.update(request.body , id);
            return response.status(200).json({aluno});
        } catch(error){
            return response.status(400).json({erro: error.message})
        }
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