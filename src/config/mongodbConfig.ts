require('dotenv').config()

const mongodbConfig = {
  server: process.env.MONGODB_URL
}

export { mongodbConfig }
