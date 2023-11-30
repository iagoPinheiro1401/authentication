/* eslint-disable import/no-extraneous-dependencies */
import { withIronSessionApiRoute } from 'iron-session/next'

import createHandler from '../../../lib/middleware/nextConnect'
import validate from '../../../lib/middleware/validation'
import { signupUser } from '../../../modules/user/user.service'
import { signupSchema } from '../../../modules/user/user.schema'
import { ironConfig } from '../../../lib/middleware/ironSession'

const signup = createHandler()
   .post(validate({ body: signupSchema}), async (req, res) => {
    try {
        const user = await signupUser(req.body)
        req.session.user = {
            id: user._id,
        }
        await req.session.save()
        res.send({ ok: true })
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).send({
                 code: 11000,
                 duplicatedKey: Object.keys(err.keyPattern)[0]
            })
        }
        throw err
    }
   })

export default withIronSessionApiRoute(signup, ironConfig)
