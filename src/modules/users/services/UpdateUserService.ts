import { BCryptHashProvider } from '../../../providers/HashProvider/BcryptHashProvider'
import { UpdateUserDTO } from '../dtos/userDTO'
import { UserRepository } from '../repositories/UserRepository'

class UpdateUserService {
  public async updateUser (_id: string, userObj: UpdateUserDTO): Promise<any> {
    const usersRepository = new UserRepository()

    const checkIfUserExists = await usersRepository.findUserById(_id)

    if (checkIfUserExists === null) {
      throw new Error('This user non exists!')
    }

    if (userObj.email) {
      const checkIfEmailAlreadyExists = await usersRepository.findByEmail(userObj.email)

      if (checkIfEmailAlreadyExists && checkIfEmailAlreadyExists.email !== checkIfUserExists.email) {
        throw new Error('This email already exists')
      }
    }

    if (userObj.password) {
      const bcryptHashProvider = new BCryptHashProvider()

      const hashPassword = await bcryptHashProvider.generateHash(userObj.password)

      try {
        await usersRepository.updateUser(_id, userObj, hashPassword)
      } catch (error) {
        throw new Error('Ocurred an error.')
      }
    } else {
      try {
        await usersRepository.updateUser(_id, userObj)
      } catch (error) {
        throw new Error('Ocurred an error.')
      }
    }
  }
}

export { UpdateUserService }
