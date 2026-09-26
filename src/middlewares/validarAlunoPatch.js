const alunoPatchSchema = require("../schemas/alunoPatchSchema");

const validarAlunoPatch = (request, response, next)=>{
    
    const result = alunoPatchSchema.safeParse(request.body);
    if(!result.success){
        const errors = result.error.issues.map((e)=>{
            return {
                campo: e.path[0],
                message: e.message
            }
        });
        return response.status(400).json({errors});
    }
    request.body = result.data;
    next();
};

module.exports = validarAlunoPatch;