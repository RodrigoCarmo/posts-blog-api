import { validate } from 'class-validator'
import { Request, Response } from 'express'
import { PostDTO } from '../dtos/postDTO'
import { CreatePostService } from '../services/CreatePostService'
import { CreatePostValidator } from '../validators/PostValidators'

class CreatePostController {
  public async createPost (request: Request, response: Response): Promise<void> {
    const { author, title, description, categories }: PostDTO = request.body

    const createPostService = new CreatePostService()

    let createPostValidator = new CreatePostValidator()

    createPostValidator.author = author
    createPostValidator.title = title
    createPostValidator.description = description
    createPostValidator.categories = categories

    validate(createPostValidator).then(async (errors) => {
      if (errors.length > 0) {
        return response.status(400).json(errors)
      }

      try {
        await createPostService.createPost({ author, title, description, categories })
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

export { CreatePostController }
