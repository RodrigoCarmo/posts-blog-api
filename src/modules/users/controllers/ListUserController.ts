import { validate } from 'class-validator'
import { Request, Response } from 'express'
import { ListUserService } from '../services/ListUserService'
import { UserEmailValidator, UserIdValidator, UserLimiterValidator } from '../validators/UserValidator'

class ListUserController {
  public async listUserById (request: Request, response: Response): Promise<any> {
    const { _id } = request.params

    const listUserService = new ListUserService()

    let userIdValidator = new UserIdValidator()

    userIdValidator._id = _id

    validate(userIdValidator).then(async (errors) => {
      if (errors.length > 0) {
        return response.status(400).json(errors)
      }

      try {
        const user = await listUserService.listUserById(_id)

        return response.status(200).json(user)
      } catch (error) {
        if (error instanceof Error) {
          return response.status(400).json({ message: 'This user non exists!', error })
        }

        return response.status(400).json({ message: 'Ocurred an error.', error })
      }
    })
  }

  public async listByEmail (request: Request, response: Response): Promise<any> {
    const { email } = request.body

    const listUserService = new ListUserService()

    let userEmailValidator = new UserEmailValidator()

    userEmailValidator.email = email

    validate(userEmailValidator).then(async (errors) => {
      if (errors.length > 0) {
        return response.status(400).json(errors)
      }

      try {
        const user = await listUserService.listUserByEmail(email)

        return response.status(200).json(user)
      } catch (error) {
        if (error instanceof Error) {
          return response.status(400).json({ message: 'This user non exists!', error })
        }

        return response.status(400).json({ message: 'Ocurred an error.', error })
      }
    })
  }

  public async listAllUsers (request: Request, response: Response): Promise<any> {
    const { limit } = request.body

    const listUserService = new ListUserService()

    let userEmailValidator = new UserLimiterValidator()

    userEmailValidator.limit = limit

    validate(userEmailValidator).then(async (errors) => {
      if (errors.length > 0) {
        return response.status(400).json(errors)
      }

      try {
        const users = await listUserService.listAllUsers(limit)

        return response.status(200).json(users)
      } catch (error) {
        if (error instanceof Error) {
          return response.status(400).json({ message: 'This user non exists!', error })
        }

        return response.status(400).json({ message: 'Ocurred an error.', error })
      }
    })
  }
}

export { ListUserController }
