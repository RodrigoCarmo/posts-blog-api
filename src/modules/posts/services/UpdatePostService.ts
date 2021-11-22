import { UpdatePostDTO } from '../dtos/postDTO'
import { PostRepository } from '../repositories/PostRepository'

class UpdatePostService {
  public async updatePost (_id: string, postObj: UpdatePostDTO): Promise<any> {
    const postRepository = new PostRepository()

    const checkIfPostExists = await postRepository.findPostById(_id)

    if (checkIfPostExists === null) {
      throw new Error('This post non exists!')
    }

    try {
      await postRepository.updatePost(_id, postObj)
    } catch (error) {
      throw new Error('Ocurred an error.')
    }
  }
}

export { UpdatePostService }
