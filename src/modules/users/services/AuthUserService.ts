import { sign } from 'jsonwebtoken'
import { tokenConfig } from '../../../config/tokenConfig'
import { BCryptHashProvider } from '../../../providers/HashProvider/BcryptHashProvider'
import { AuthUserDTO } from '../dtos/userDTO'
import { UserRepository } from '../repositories/UserRepository'

class AuthUserService {
  public async authenticate ({ email, password }: AuthUserDTO): Promise<any> {
    const usersRepository = new UserRepository()

    const user = await usersRepository.findByEmailWithPassword(email)

    if (!user) {
      throw new Error('Email or password is incorrect!')
    }

    const bcryptHashProvider = new BCryptHashProvider()

    const checkPassword = await bcryptHashProvider.compare(password, user.password)

    if (!checkPassword) {
      throw new Error('Email or password is incorrect!')
    }

    try {
      const token = sign({
        id: user._id,
        email: user.email,
        name: user.name
      }, tokenConfig.secret_token, {
        subject: String(user._id),
        expiresIn: tokenConfig.expires_in

      })

      return {
        id: user._id,
        name: user.name,
        email: user.email,
        token

      }
    } catch (err) {
      console.log(err)
    }
  }
}

export { AuthUserService }
