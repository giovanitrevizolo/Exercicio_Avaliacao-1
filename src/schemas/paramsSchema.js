const z = require("zod");

const paramsSchema = z.object({
    id : z.coerce.number({message : "Deve ser um número"}).int({message : "pageSize deve ser um número inteiro"})
});


module.exports = paramsSchema;