import { IPostDefault } from '../interface/IPost'
import { PostRepository } from '../repositories/PostRepository'

class ListPostService {
  public async listPostByAuthor (_id: string): Promise<IPostDefault | null> {
    const postRepository = new PostRepository()

    try {
      const checkExistsPostId = await postRepository.findPostById(_id)

      if (checkExistsPostId === null) {
        throw new Error('This post does not exists!')
      }

      return checkExistsPostId
    } catch (error) {
      throw new Error('Ocurred an error.')
    }
  }

  public async listAllPosts (limit: number): Promise<IPostDefault[] | null> {
    const postRepository = new PostRepository()

    try {
      const checkExistsPostId = await postRepository.listAllPosts(limit)

      if (checkExistsPostId === null) {
        throw new Error('This post does not exists!')
      }

      return checkExistsPostId
    } catch (error) {
      throw new Error('Ocurred an error.')
    }
  }
}

export { ListPostService }
