const prisma = require("../databases/prisma");
const AlunoInvalidoError = require("../errors/AlunoInvalidoError");
const AlunoNaoEncontradoError = require("../errors/AlunoNaoEncontradoError");

class AlunoService{

    async findMany(page, pageSize , order , orderBy){
        const alunos = await prisma.aluno.findMany({
            skip: (page-1)*pageSize,
            take: Number(pageSize),
            orderBy: { [orderBy] :order }
        });
        return alunos;
    }

    async countTotal(){
        const totalAlunos = await prisma.aluno.count();
        return totalAlunos;
    }

    async findUnique(id){
            const aluno = await prisma.aluno.findUnique({where: {id: id}});
            if(!aluno){
                throw new AlunoNaoEncontradoError;
            }
            return aluno;             

    }

    async update(alunoDados, id){
        const aluno = await prisma.aluno.update({
            where: {id : id} , 
            data: alunoDados
        });

        if(!aluno) {
            throw new Error("aluno não encontrado");
        }

        return aluno;
    }

    async create(aluno){
        const {nome, email} = aluno;
        if(!nome || !email){
            throw new AlunoInvalidoError();
        }

        const novoAluno = await prisma.aluno.create({data: aluno});

        return novoAluno;
    }
}

module.exports = new AlunoService();