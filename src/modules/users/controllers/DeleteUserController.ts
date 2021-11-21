import { validate } from 'class-validator'
import { Request, Response } from 'express'
import { DeleteUserService } from '../services/DeleteUserService'
import { UserIdValidator } from '../validators/UserValidator'

class DeleteUserController {
  public async deleteUser (request: Request, response: Response): Promise<void> {
    const { _id } = request.body

    const deleteUserService = new DeleteUserService()

    let userIdValidator = new UserIdValidator()

    userIdValidator._id = _id

    validate(userIdValidator).then(async (errors) => {
      if (errors.length > 0) {
        return response.status(400).json(errors)
      }

      try {
        const deleteUser = await deleteUserService.deleteUser(_id)

        return response.status(200).json(deleteUser)
      } catch (error) {
        if (error instanceof Error) {
          return response.status(400).json({ message: error.message })
        }

        return response.status(400).json({ message: 'Ocurred an error.', error })
      }
    })
  }
}

export { DeleteUserController }
