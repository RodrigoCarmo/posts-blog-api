import { validate } from 'class-validator'
import { Request, Response } from 'express'
import { DeletePostService } from '../services/DeletePostService'
import { PostIdValidator } from '../validators/PostValidators'

class DeletePostController {
  public async deletePost (request: Request, response: Response): Promise<void> {
    const { _id } = request.body

    const deletePostService = new DeletePostService()

    let postIdValidator = new PostIdValidator()

    postIdValidator._id = _id

    validate(postIdValidator).then(async (errors) => {
      if (errors.length > 0) {
        return response.status(400).json(errors)
      }

      try {
        const deletePost = await deletePostService.deletePost(_id)

        return response.status(200).json(deletePost)
      } catch (error) {
        if (error instanceof Error) {
          return response.status(400).json({ message: error.message })
        }

        return response.status(400).json({ message: 'Ocurred an error.', error })
      }
    })
  }
}

export { DeletePostController }
