export interface MediaFormat {
    height: number
    width: number
    url: string
}

export interface Media {
    data: {
        attributes: {
            height: number
            width: number
            formats: {
                small: MediaFormat
                medium: MediaFormat
                large: MediaFormat
            }
        }
    }
}

export interface Recipe {
    id: number
    attributes: {
        FeaturedImage: Media
        Title: string
        Excerpt: string
        slug: string
    }
}

export interface RecipeResponse {
    data: Recipe[]
}