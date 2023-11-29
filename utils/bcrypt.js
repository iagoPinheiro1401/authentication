import bcryptjs from 'bcryptjs'

export const hashPassword = (senha) => 
   bcryptjs.hashSync(senha)

export const comparePassword = (senha, hash) => 
   bcryptjs.compareSync(senha, hash)