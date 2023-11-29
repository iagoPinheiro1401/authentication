import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    nome: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: true, maxlength: 150, unique: true },
    senha: { type: String, required: true, minlength: 6 },
    ddd: { type: Number, required: true, minlength: 2 },
    telefone: { type: Number, required: true, minlength: 8 }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)