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
    @IsOptional()
    author?: string

    @IsString()
    @IsOptional()
     title?: string

     @IsString()
     @IsOptional()
     description?: string

     @IsArray()
     @IsOptional()
     categories?: []
}

class PostLimiterValidator {
    @IsNumber()
    @IsOptional()
    limit?: number
}

export { CreatePostValidator, PostIdValidator, UpdatePostValidator, PostLimiterValidator }
