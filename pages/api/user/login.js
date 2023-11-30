import Joi from 'joi'
import { withIronSessionApiRoute } from 'iron-session/next'

import createHandler from '../../../lib/middleware/nextConnect'
import validate from '../../../lib/middleware/validation'
import { login } from '../../../modules/user/user.service'
import { loginSchema } from '../../../modules/user/user.schema'
import { ironConfig } from '../../../lib/middleware/ironSession'

// ... imports existentes

// ... imports existentes

const handler = createHandler()
   .post(validate({ body: loginSchema }), async (req, res) => {
    try {
        const user = await login(req.body);

        // Adicionar datas ao objeto do usuário
        const now = new Date();
        if (!user.createdAt) {
          user.createdAt = now.toISOString();
        }
        user.updatedAt = now.toISOString();
        user.lastLogin = now.toISOString();

        // Salvar objeto do usuário
        await user.save();

        req.session.user = {
            id: user._id,
        };
        await req.session.save();
        res.send({
            ok: true,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            lastLogin: user.lastLogin,
        });
    } catch (err) {
        console.error(err);
        return res.status(400).send(err.message);
    }
   });

export default withIronSessionApiRoute(handler, ironConfig);
