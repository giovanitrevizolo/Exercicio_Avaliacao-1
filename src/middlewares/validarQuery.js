const querySchema = require("../schemas/querySchema");



const validarQuery = (request,response,  next)=>{
    const result = querySchema.safeParse(request.query);

    if(!result.success){
        Object.defineProperty(request, 'query', {value: { page:1, pageSize:10, orderBy:"id", order: "asc" }
        }); 
    }

    next();

};

module.exports = validarQuery;