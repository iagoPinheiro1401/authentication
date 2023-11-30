/* eslint-disable import/no-extraneous-dependencies */
import createHandler from '../../../lib/middleware/nextConnect'

import validate from '../../../lib/middleware/validation'
import { signupUser } from '../../../modules/user/user.service'
import { signupSchema } from '../../../modules/user/user.schema'

const signup = createHandler()
   .post(validate({ body: signupSchema}), async (req, res) => {
    try {
        const user = await signupUser(req.body)
        res.status(201).json(user)
    } catch (err) {
        console.error(err)
        throw err
    }
   })

export default signup
