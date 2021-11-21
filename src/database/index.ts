import mongoose from 'mongoose'
import { mongodbConfig } from '../config/mongodbConfig'

let server

if (mongodbConfig.server !== undefined) { server = mongodbConfig.server } else {
  server = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
}

mongoose.connect(server,
  {

    retryWrites: true

  }
).then(() => {
  if (mongodbConfig.server !== undefined) {
    console.log('MongoDB conectado ao cluster online')
  } else {
    console.log('MongoDB conectado localmente')
  }
})

  .catch((err: any) => {
    console.log('Connection error', err)
    process.exit()
  })

mongoose.Promise = global.Promise

export { mongoose }
