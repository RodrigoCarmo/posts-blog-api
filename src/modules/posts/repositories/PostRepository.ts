import { PostDTO, UpdatePostDTO } from '../dtos/postDTO'
import { IPostDefault } from '../interface/IPost'
import { PostModel } from '../schemas/Post'
import { IPostRepository } from './IPostRepository'

class PostRepository implements IPostRepository {
  async create ({ author, title, description, categories }: PostDTO): Promise<void> {
    const post = {
      author,
      title,
      description,
      categories
    }

    await PostModel.create(post)
  }

  async deletePost (_id: string): Promise<void> {
    await PostModel.findByIdAndDelete(_id)
  }

  async findPostById (_id: string): Promise<IPostDefault | null> {
    const post = await PostModel.findById(_id)

    return post
  }

  async updatePost (_id: string, userObj: UpdatePostDTO): Promise<void> {
    await PostModel.findByIdAndUpdate(
      { _id },
      {
        $set: {
          ...userObj
        }
      },
      { new: true }
    )
  }

  async listAllPosts (limit: number): Promise<IPostDefault[] | null> {
    const post = await PostModel.find().limit(limit).select('-password')

    return post
  }
}
export { PostRepository }
