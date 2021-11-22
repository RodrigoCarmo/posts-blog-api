import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { CreatePostController } from '../modules/posts/controllers/CreatePostController'
import { DeletePostController } from '../modules/posts/controllers/DeletePostController'
import { ListPostController } from '../modules/posts/controllers/ListPostController'
import { UpdatePostController } from '../modules/posts/controllers/UpdatePostController'

const postsRouter = Router()

const createPostController = new CreatePostController()
const deletePostController = new DeletePostController()
const updatePostController = new UpdatePostController()
const listPostController = new ListPostController()

postsRouter.post('/', ensureAuthenticated, createPostController.createPost)
postsRouter.delete('/', ensureAuthenticated, deletePostController.deletePost)
postsRouter.get('/all', ensureAuthenticated, listPostController.listAllPosts)
postsRouter.put('/:_id', ensureAuthenticated, updatePostController.updateUser)
postsRouter.get('/:_id', ensureAuthenticated, listPostController.listUserByAuthor)

export { postsRouter }
