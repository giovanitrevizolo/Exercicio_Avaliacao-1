const paramsSchema = require("../schemas/paramsSchema");

const validarParams = (request, response, next)=>{
    const result = paramsSchema.safeParse(request.params);
    if(!result.success){
        const errors = result.error.issues.map((e)=>{
            return {
                campo: e.path[0],
                message: e.message
            }
        });
        return response.status(400).json({errors});
    }
    request.params = result.data;
    next();
};

module.exports = validarParams;