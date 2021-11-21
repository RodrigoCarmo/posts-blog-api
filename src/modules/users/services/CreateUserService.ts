
import { BCryptHashProvider } from '../../../providers/HashProvider/BcryptHashProvider'
import { UserDTO } from '../dtos/userDTO'
import { UserRepository } from '../repositories/UserRepository'

class CreateUserService {
  public async createUser ({ name, email, password }: UserDTO): Promise<void> {
    const usersRepository = new UserRepository()

    const checkIfEmailAlreadyExists = await usersRepository.findByEmail(email)

    if (checkIfEmailAlreadyExists) {
      throw new Error('This email already exists!')
    }

    const bcryptHashProvider = new BCryptHashProvider()

    const hashPassword = await bcryptHashProvider.generateHash(password)

    try {
      await usersRepository.create({ name, email, password: hashPassword })
    } catch (error) {
      throw new Error('Ocurred an error.')
    }
  }
}

export { CreateUserService }
