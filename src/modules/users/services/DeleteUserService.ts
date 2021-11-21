import { UserRepository } from '../repositories/UserRepository'

class DeleteUserService {
  public async deleteUser (_id: string): Promise<void> {
    const userRepository = new UserRepository()

    const checkExistsUserId = await userRepository.findUserById(_id)
    if (checkExistsUserId === null) {
      throw new Error('This user does not exists!')
    }

    try {
      await userRepository.deleteUser(_id)
    } catch (error) {
      console.log(error)
    }
  }
}

export { DeleteUserService }
