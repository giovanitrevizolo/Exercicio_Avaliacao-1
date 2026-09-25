const z = require("zod");

const querySchema = z.object({
    order :  z.enum(["asc" , "desc"]),
    orderBy : z.enum(["nome" , "id" , "email" , "createdAt" , "updatedAt"]),
    page : z.coerce.number({message: "page deve ser um numero"}).int({message : "page deve ser um número inteiro"}).min(1),
    pageSize : z.coerce.number({message : "pageSize deve ser um número"}).int({message : "pageSize deve ser um número inteiro"}).min(1, "numero minimo de 1").max(25, "numero maximo de 25")
});


module.exports = querySchema;