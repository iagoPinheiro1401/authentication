import Joi from 'joi'

import createHandler from '../../../lib/middleware/nextConnect'
import validate from '../../../lib/middleware/validation'
import { login } from '../../../modules/user/user.service'

const loginSchema = Joi.object({
    email: Joi.string().required(),
    senha: Joi.string().required()
})

const handler = createHandler()

handler.post(validate({ body: loginSchema }), async (req, res) => {
    try{
        const user = await login(req.body)
        res.send(user)
    } catch (err) {
        console.error(err)
        throw err
    }
})

export default handler