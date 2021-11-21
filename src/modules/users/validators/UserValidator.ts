import { IsEmail, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

class CreateUserValidator {
    @IsString()
    @IsNotEmpty()
    name!: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email!: string

    @IsString()
    @IsNotEmpty()
    password!: string
}

class UserIdValidator {
    @IsMongoId()
    @IsNotEmpty()
    _id!: string
}

class UserEmailValidator {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email!: string
}

class UserLimiterValidator {
    @IsNumber()
    @IsOptional()
    limit?: number
}

class UpdateUserValidator {
    @IsString()
    @IsOptional()
    name?: string

    @IsString()
    @IsOptional()
    @IsEmail()
    email?: string

    @IsString()
    @IsOptional()
    password?: string
}

class AuthUserValidator {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email!: string

    @IsString()
    @IsNotEmpty()
    password!: string
}

export {
  AuthUserValidator,
  CreateUserValidator,
  UserIdValidator,
  UserEmailValidator,
  UserLimiterValidator,
  UpdateUserValidator
}
