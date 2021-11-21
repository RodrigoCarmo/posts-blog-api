import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { AuthUserController } from '../modules/users/controllers/AuthUserController'
import { CreateUserController } from '../modules/users/controllers/CreateUserController'
import { DeleteUserController } from '../modules/users/controllers/DeleteUserController'
import { ListUserController } from '../modules/users/controllers/ListUserController'
import { UpdateUserController } from '../modules/users/controllers/UpdateUserController'

const usersRoutes = Router()

const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()
const listUserController = new ListUserController()
const updateUserController = new UpdateUserController()
const authUserController = new AuthUserController()

usersRoutes.post('/', createUserController.createUser)
usersRoutes.delete('/', ensureAuthenticated, deleteUserController.deleteUser)
usersRoutes.get('/all', ensureAuthenticated, listUserController.listAllUsers)
usersRoutes.get('/:_id', ensureAuthenticated, listUserController.listUserById)
usersRoutes.get('/', ensureAuthenticated, listUserController.listByEmail)
usersRoutes.put('/:_id', ensureAuthenticated, updateUserController.updateUser)
usersRoutes.post('/auth', authUserController.authUser)

export { usersRoutes }
