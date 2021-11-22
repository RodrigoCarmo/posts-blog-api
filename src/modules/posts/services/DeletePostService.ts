import { PostRepository } from '../repositories/PostRepository'

class DeletePostService {
  public async deletePost (_id: string): Promise<void> {
    const postRepository = new PostRepository()

    const checkExistsPostId = await postRepository.findPostById(_id)
    if (checkExistsPostId === null) {
      throw new Error('This post does not exists!')
    }

    try {
      await postRepository.deletePost(_id)
    } catch (error) {
      console.log(error)
    }
  }
}

export { DeletePostService }
