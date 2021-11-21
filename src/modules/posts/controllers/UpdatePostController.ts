import { validate } from 'class-validator'
import { Request, Response } from 'express'
import { UpdatePostDTO } from '../dtos/postDTO'
import { UpdatePostService } from '../services/UpdatePostService'
import { PostIdValidator, UpdatePostValidator } from '../validators/postValidators'

class UpdatePostController {
  public async updateUser (request: Request, response: Response): Promise<void | any> {
    const { _id } = request.params
    const { author, title, description, categories }: UpdatePostDTO = request.body

    const updatePostService = new UpdatePostService()

    let updatePostValidator = new UpdatePostValidator()

    let postIdValidator = new PostIdValidator()

    postIdValidator._id = _id

    validate(postIdValidator).then(async (errors) => {
      if (errors.length > 0) {
        return response.status(400).json(errors)
      }
    })

    updatePostValidator.author = author
    updatePostValidator.title = title
    updatePostValidator.description = description
    updatePostValidator.categories = categories

    validate(updatePostValidator).then(async (errors) => {
      if (errors.length > 0) {
        return response.status(400).json(errors)
      }

      const postObj : UpdatePostDTO = {
        author, title, description, categories
      }

      try {
        const post = await updatePostService.updatePost(_id, postObj)
        return response.json(post)
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

export { UpdatePostController }
