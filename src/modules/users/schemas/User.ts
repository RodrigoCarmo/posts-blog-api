import { mongoose } from '../../../database'

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String

}, { timestamps: true })

const UserModel = mongoose.model('users', UserSchema)

export { UserModel }
