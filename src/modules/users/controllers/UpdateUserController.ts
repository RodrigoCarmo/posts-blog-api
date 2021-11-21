import { validate } from 'class-validator'
import { Request, Response } from 'express'
import { UpdateUserDTO } from '../dtos/userDTO'
import { UpdateUserService } from '../services/UpdateUserService'
import { UpdateUserValidator, UserIdValidator } from '../validators/UserValidator'

class UpdateUserController {
  public async updateUser (request: Request, response: Response): Promise<void | any> {
    const { _id } = request.params
    const { name, email, password }: UpdateUserDTO = request.body

    const updateUserService = new UpdateUserService()

    let updateUserValidator = new UpdateUserValidator()

    let userIdValidator = new UserIdValidator()

    userIdValidator._id = _id

    validate(userIdValidator).then(async (errors) => {
      if (errors.length > 0) {
        return response.status(400).json(errors)
      }
    })

    updateUserValidator.name = name
    updateUserValidator.email = email
    updateUserValidator.password = password

    validate(updateUserValidator).then(async (errors) => {
      if (errors.length > 0) {
        return response.status(400).json(errors)
      }

      const userObj : UpdateUserDTO = {
        name, email, password
      }

      try {
        const user = await updateUserService.updateUser(_id, userObj)
        return response.json(user)
      } catch (error) {
        if (error instanceof Error) {
          if (error.message) {
            return response.status(400).json({ error: error.message })
          }

          return response.status(400).json({ error: error.message })
        }
        return response.status(400).json({ error: 'Ocurred an error.' })
      }
    })
  }
}

export { UpdateUserController }
