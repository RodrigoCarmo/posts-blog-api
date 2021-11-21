class UserDTO {
    name!: string
    email!: string
    password!: string
}

class UpdateUserDTO {
    name?: string
    email?: string
    password?: string
}

class AuthUserDTO {
    email!: string
    password!: string
}

export { UserDTO, UpdateUserDTO, AuthUserDTO }
