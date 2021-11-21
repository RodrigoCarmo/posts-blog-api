import { PostRepository } from '../repositories/PostRepository'

class DeletePostService {
  public async deletePost (_id: string): Promise<void> {
    const postRepository = new PostRepository()

    const checkExistsUserId = await postRepository.findPostById(_id)
    if (checkExistsUserId === null) {
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
