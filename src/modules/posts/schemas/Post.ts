import { mongoose } from '../../../database'

const PostSchema = new mongoose.Schema({
  author: String,
  title: String,
  description: String,
  categories: []

}, { timestamps: true })

const PostModel = mongoose.model('posts', PostSchema)

export { PostModel }
