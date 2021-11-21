import { PostDTO, UpdatePostDTO } from '../dtos/postDTO'
import { IPostDefault } from '../interface/IPost'

export interface IPostRepository {
    create({ author, title, description, categories }: PostDTO): Promise<void>
    findPostById(_id: string): Promise<IPostDefault | null>
    deletePost(_id: string): Promise<void>
    updatePost(_id: string, userObj: UpdatePostDTO): Promise<void>
    listAllPosts(limit: number): Promise<IPostDefault[] | null>

}
