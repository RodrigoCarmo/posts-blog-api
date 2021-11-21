class PostDTO {
    author!: string
    title!: string
    description!: string
    categories!: []
}

class UpdatePostDTO {
    author?: string
    title?: string
    description?: string
    categories?: []
}

export { PostDTO, UpdatePostDTO }
