import { Document } from 'mongoose'

interface IPost extends Document {
    author: string
    title: string
    description: string
    categories: []

}

interface IPostDefault {
    author: string
    title: string
    description: string
    categories: []

}

export { IPost, IPostDefault }
