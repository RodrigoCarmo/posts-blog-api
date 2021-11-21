import { validate } from 'class-validator'
import { Request, Response } from 'express'
import { UserDTO } from '../dtos/userDTO'
import { CreateUserService } from '../services/CreateUserService'
import { CreateUserValidator } from '../validators/UserValidator'

class CreateUserController {
  public async createUser (request: Request, response: Response): Promise<void> {
    const { name, email, password }: UserDTO = request.body

    const createUserService = new CreateUserService()

    let userValitador = new CreateUserValidator()

    userValitador.name = name
    userValitador.email = email
    userValitador.password = password

    validate(userValitador).then(async (errors) => {
      if (errors.length > 0) {
        return response.status(400).json(errors)
      }

      try {
        await createUserService.createUser({ name, email, password })
        return response.status(201).send()
      } catch (error) {
        if (error instanceof Error) {
          return response.status(400).json({ error: error.message })
        }
        return response.status(400).json({ error: 'Ocurred an error.' })
      }
    })
  }
}

export { CreateUserController }
