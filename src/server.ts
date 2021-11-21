import cors from 'cors'
import express from 'express'
import './database/index'
import { routes } from './routes/index.routes'

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(process.env.SERVER_PORT, () => console.log('\x1b[32m', `🐱‍💻 Servidor rodando na porta: ${process.env.SERVER_PORT}`))
