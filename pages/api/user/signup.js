/* eslint-disable import/no-extraneous-dependencies */
import Joi from 'joi'

import createHandler from '../../../lib/middleware/nextConnect'

import validate from '../../../lib/middleware/validation'
import { signupUser } from '../../../modules/user/user.service'

const postSchema = Joi.object({
    nome: Joi.string().required().max(50),
    email: Joi.string().required().email().max(150),
    senha: Joi.string().required().max(20).min(6),
    ddd: Joi.number().required().min(2),
    telefone: Joi.number().required().min(8)
})

const signup = createHandler()
   .post(validate({ body: postSchema }), (req, res) => {
        signupUser()
        res.status(200).json({ teste: 'ok'})
   })

export default signup
