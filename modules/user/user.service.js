import { hashPassword } from '../../utils/bcrypt'
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