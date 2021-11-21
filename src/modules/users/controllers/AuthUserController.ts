import { validate } from 'class-validator'
import { Request, Response } from 'express'
import { AuthUserDTO } from '../dtos/userDTO'
import { AuthUserService } from '../services/AuthUserService'
import { AuthUserValidator } from '../validators/UserValidator'

class AuthUserController {
  public async authUser (request: Request, response: Response): Promise<void | any> {
    const { email, password }: AuthUserDTO = request.body

    const authUserService = new AuthUserService()

    let authUserValidator = new AuthUserValidator()

    authUserValidator.email = email
    authUserValidator.password = password

    validate(authUserValidator).then(async (errors) => {
      if (errors.length > 0) {
        return response.status(400).json(errors)
      }

      try {
        const token = await authUserService.authenticate({ email, password })
        return response.json(token)
      } catch (error) {
        if (error instanceof Error) {
          return response.status(400).json({ error: error.message })
        }
        return response.status(400).json({ error: 'Ocurred an error.' })
      }
    })
  }
}

export { AuthUserController }
