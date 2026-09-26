const z = require("zod");

const querySchema = z.object({
    order :  z.enum(["asc" , "desc"]).optional(),
    orderBy : z.enum(["nome" , "id" , "email" , "createdAt" , "updatedAt"]).optional(),
    page : z.coerce.number({message: "page deve ser um numero"}).int({message : "page deve ser um número inteiro"}).min(1).optional(),
    pageSize : z.coerce.number({message : "pageSize deve ser um número"}).int({message : "pageSize deve ser um número inteiro"}).min(1, "numero minimo de 1").max(25, "numero maximo de 25").optional()
});


module.exports = querySchema;