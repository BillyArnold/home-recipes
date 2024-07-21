import { Recipe } from "@/types"
import Image from "next/image"
import Link from "next/link"

interface RecipeCardProps {
    recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
    return (
        <article className="rounded-md overflow-hidden shadow-lg w-full bg-white h-full">
            <Image className="h-60 object-cover" alt="Food image" width={recipe.attributes.FeaturedImage.data.attributes.width} height={recipe.attributes.FeaturedImage.data.attributes.height} src={`${process.env.MEDIA_URL}${recipe.attributes.FeaturedImage.data.attributes.formats.large.url}`} />
            <div className="px-6 py-4">
                <Link href={`/recipe/${recipe.attributes.slug}`}>
                    <div className="font-bold text-xl mb-2">{recipe.attributes.Title}</div>
                </Link>
                <p className="text-gray-700 text-base">{recipe.attributes.Excerpt}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {recipe.attributes.categories.data.map(cat => (
                    <span key={cat.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{cat.attributes.Name}</span>
                ))}
            </div>
        </article>
    )
}