import { validate } from 'class-validator'
import { Request, Response } from 'express'
import { ListPostService } from '../services/ListPostService'
import { PostIdValidator, PostLimiterValidator } from '../validators/postValidators'

class ListPostController {
  public async listUserByAuthor (request: Request, response: Response): Promise<void> {
    const { _id } = request.params

    const listPostService = new ListPostService()

    let postIdValidator = new PostIdValidator()

    postIdValidator._id = _id

    validate(postIdValidator).then(async (errors) => {
      if (errors.length > 0) {
        return response.status(400).json(errors)
      }

      try {
        const user = await listPostService.listPostByAuthor(_id)

        return response.status(200).json(user)
      } catch (error) {
        if (error instanceof Error) {
          return response.status(400).json({ message: 'This post non exists!', error })
        }

        return response.status(400).json({ message: 'Ocurred an error.', error })
      }
    })
  }

  public async listAllPosts (request: Request, response: Response): Promise<void> {
    const { limit } = request.body

    const listPostService = new ListPostService()

    let postLimiterValidator = new PostLimiterValidator()

    postLimiterValidator.limit = limit

    validate(postLimiterValidator).then(async (errors) => {
      if (errors.length > 0) {
        return response.status(400).json(errors)
      }

      try {
        const users = await listPostService.listAllPosts(limit)

        return response.status(200).json(users)
      } catch (error) {
        if (error instanceof Error) {
          return response.status(400).json({ message: 'This post non exists!', error })
        }

        return response.status(400).json({ message: 'Ocurred an error.', error })
      }
    })
  }
}

export { ListPostController }
