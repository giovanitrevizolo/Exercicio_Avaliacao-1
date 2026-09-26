const z = require("zod");

const alunoPatchSchema = z.object({
    nome: z.string("O nome não pode ser númerico").trim().min(3, "Nome muito curto.").optional(),
    email: z.string().trim().email("E-mail inválido").optional()
});

module.exports = alunoPatchSchema;