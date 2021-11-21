
import { PostDTO } from '../dtos/postDTO'
import { PostRepository } from '../repositories/PostRepository'

class CreatePostService {
  public async createPost ({ author, title, description, categories }: PostDTO): Promise<void> {
    const postRepository = new PostRepository()

    try {
      await postRepository.create({ author, title, description, categories })
    } catch (error) {
      throw new Error('Ocurred an error.')
    }
  }
}

export { CreatePostService }
