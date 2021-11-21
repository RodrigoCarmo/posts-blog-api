import { UpdatePostDTO } from '../dtos/postDTO'
import { PostRepository } from '../repositories/PostRepository'

class UpdatePostService {
  public async updatePost (_id: string, postObj: UpdatePostDTO): Promise<any> {
    const postRepository = new PostRepository()

    const checkIfPostExists = await postRepository.findPostById(_id)

    if (checkIfPostExists === null) {
      throw new Error('This post non exists!')
    }

    // if (postObj.email) {
    //   const checkIfEmailAlreadyExists = await usersRepository.findByEmail(postObj.email)

    //   if (checkIfEmailAlreadyExists && checkIfEmailAlreadyExists.email !== checkIfUserExists.email) {
    //     throw new Error('This email already exists')
    //   }
    // }

    // if (postObj.password) {
    //   const bcryptHashProvider = new BCryptHashProvider()

    //   const hashPassword = await bcryptHashProvider.generateHash(postObj.password)

    //   try {
    //     await usersRepository.updateUser(_id, postObj, hashPassword)
    //   } catch (error) {
    //     throw new Error('Ocurred an error.')
    //   }
    // } else {
    try {
      await postRepository.updatePost(_id, postObj)
    } catch (error) {
      throw new Error('Ocurred an error.')
    }
  }
}

export { UpdatePostService }
