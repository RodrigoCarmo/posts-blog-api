import { UpdateUserDTO, UserDTO } from '../dtos/userDTO'
import { IUser } from '../interface/IUser'

export interface IUserRepository {
    create({ name, email, password }: UserDTO): Promise<void>
    findByEmail(email: string):Promise<IUser | null>
    findUserById(_id: string): Promise<IUser | null>
    listUserByIdWithoutPassword(_id: string): Promise<IUser | null>
    listAllUsers(limit: number): Promise<IUser[] | null>
    deleteUser(_id: string): Promise<void>
    updateUser(_id: string, userObj: UpdateUserDTO, hashPassword?:string): Promise<void>
    findByEmailWithPassword(email: string): Promise<IUser | null>

}
