import { hashPassword, comparePassword } from '../../utils/bcrypt'
import User from './user.model'

/* eslint-disable import/prefer-default-export */
export const signupUser = async (body) => {
    try{
        const user = {
            ...body,
            senha: hashPassword(body.senha)
        }
        const dbUser = await User.create(user)
        return dbUser
    } catch (err) {
        throw err
    }
}

export const login = async (body) => {
    try {
        const user = await User.findOne({ 
            email: body.email
         })

         if (!user) throw new Error("not found")
         const passwordIsCorrect = comparePassword(body.senha, user.senha)
         if (!passwordIsCorrect) throw new Error("senha incorreta")

         return user

    } catch (err) {
        throw err
    }
}