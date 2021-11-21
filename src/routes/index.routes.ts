import express from 'express'
import { postsRouter } from './posts.routes'
import { usersRoutes } from './users.routes'

const routes = express()

routes.use('/users', usersRoutes)
routes.use('/posts', postsRouter)

export { routes }
