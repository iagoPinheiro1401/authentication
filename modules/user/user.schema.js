import Joi from "joi"

export const signupSchema = Joi.object({
    nome: Joi.string().required().max(10).message('No máximo {{#limit}} caracteres'),
    email: Joi.string().required().email({ tlds: { allow: false } }).max(150),
    senha: Joi.string().required().max(20).message('No máximo {{#limit}} caracteres').min(6).message('No mínimo {{#limit}} caracteres'),
    ddd: Joi.number().required().min(2).message('No mínimno {{#limit}} caracteres'),
    telefone: Joi.number().required().min(8).message('No mínimo {{#limit}} caracteres')
})