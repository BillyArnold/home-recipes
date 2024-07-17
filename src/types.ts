import { MethodElement } from "./components/MethodRenderer"

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

export interface Category {
    id: number
    attributes: {
        Name: string
    }
}

export interface CategoryResponse {
    data: Category[]
}

export interface IngredientAttr {
    id: number
    Amount: Float32Array
    Unit: string
    ingredient: Ingredient
}

export interface Ingredient {
    data: {
        id: number
        attributes: {
            Name: string
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
        categories: CategoryResponse
        Method: MethodElement[]
        Ingredients: IngredientAttr[]
    }
}

export interface RecipeResponse {
    data: Recipe[]
}