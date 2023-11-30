import Joi from "joi"

export const signupSchema = Joi.object({
    nome: Joi.string().required().max(150),
    email: Joi.string().required().email({ tlds: { allow: false } }).max(150),
    senha: Joi.string().required().max(20).min(6),
    ddd: Joi.number().required().min(2),
    telefone: Joi.number().required().min(8)
})