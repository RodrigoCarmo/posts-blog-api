import { UpdateUserDTO, UserDTO } from '../dtos/userDTO'
import { UserModel } from '../schemas/User'
import { IUserRepository } from './IUserRepository'

class UserRepository implements IUserRepository {
  async create ({ name, email, password }: UserDTO): Promise<void> {
    const user = {
      name,
      email,
      password

    }

    await UserModel.create(user)
  }

  async findByEmail (email: string): Promise<any | null> {
    const user = await UserModel.findOne({ email }).select('-password').exec()

    return user
  }

  async findUserById (_id: string): Promise<any | null> {
    const user = await UserModel.findById(_id)

    return user
  }

  async deleteUser (_id: string): Promise<void> {
    await UserModel.findByIdAndDelete(_id)
  }

  async listUserByIdWithoutPassword (_id: string): Promise<any | null> {
    const user = await UserModel.findById(_id).select('-password')

    return user
  }

  async listAllUsers (limit: number): Promise<any | null> {
    const users = await UserModel.find().limit(limit).select('-password')

    return users
  }

  async updateUser (_id: string, userObj: UpdateUserDTO, hashPassword?: string): Promise<void> {
    if (hashPassword) {
      await UserModel.findByIdAndUpdate(
        { _id },
        {
          $set: {
            ...userObj,
            password: hashPassword
          }
        },
        { new: true }
      )
    } else {
      await UserModel.findByIdAndUpdate(
        { _id },
        {
          $set: {
            ...userObj
          }
        },
        { new: true }
      )
    }
  }

  async findByEmailWithPassword (email: string): Promise<any | null> {
    const user = await UserModel.findOne({ email }).exec()

    return user
  }
}

export { UserRepository }
