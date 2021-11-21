import { IsArray, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

class CreatePostValidator {
    @IsMongoId()
    @IsNotEmpty()
    author!: string

    @IsString()
    @IsNotEmpty()
     title!: string

     @IsString()
     @IsNotEmpty()
     description!: string

     @IsArray()
     @IsNotEmpty()
     categories!: []
}

class PostIdValidator {
    @IsMongoId()
    @IsNotEmpty()
    _id!: string
}

class UpdatePostValidator {
    @IsMongoId()
    @IsNotEmpty()
    author?: string

    @IsString()
    @IsNotEmpty()
     title?: string

     @IsString()
     @IsNotEmpty()
     description?: string

     @IsArray()
     @IsNotEmpty()
     categories?: []
}

class PostLimiterValidator {
    @IsNumber()
    @IsOptional()
    limit?: number
}

export { CreatePostValidator, PostIdValidator, UpdatePostValidator, PostLimiterValidator }
