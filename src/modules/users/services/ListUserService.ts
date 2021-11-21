import { IUser } from '../interface/IUser'
import { UserRepository } from '../repositories/UserRepository'

class ListUserService {
  public async listUserById (_id: string): Promise<IUser | null> {
    const userRepository = new UserRepository()

    try {
      const checkExistsUserId = await userRepository.listUserByIdWithoutPassword(_id)

      if (checkExistsUserId === null) {
        throw new Error('This user does not exists!')
      }

      return checkExistsUserId
    } catch (error) {
      throw new Error('Ocurred an error.')
    }
  }

  public async listUserByEmail (email: string): Promise<IUser | null> {
    const userRepository = new UserRepository()

    try {
      const checkExistsUserId = await userRepository.findByEmail(email)

      if (checkExistsUserId === null) {
        throw new Error('This user does not exists!')
      }

      return checkExistsUserId
    } catch (error) {
      throw new Error('Ocurred an error.')
    }
  }

  public async listAllUsers (limit: number): Promise<IUser[] | null> {
    const userRepository = new UserRepository()

    try {
      const checkExistsUserId = await userRepository.listAllUsers(limit)

      if (checkExistsUserId === null) {
        throw new Error('This user does not exists!')
      }

      return checkExistsUserId
    } catch (error) {
      throw new Error('Ocurred an error.')
    }
  }
}

export { ListUserService }
