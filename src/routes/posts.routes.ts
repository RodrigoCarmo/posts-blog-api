import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { CreatePostController } from '../modules/posts/controllers/CreatePostController'

const postsRouter = Router()

const createPostController = new CreatePostController()

postsRouter.post('/', ensureAuthenticated, createPostController.createPost)

export { postsRouter }
