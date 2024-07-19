import getRecipes from "@/actions/getRecipes"
import RecipeCard from "./ui/RecipeCard";
import { RecipeResponse } from "@/types";

interface RecipeListingProps {
    recipes: RecipeResponse
}

export default async function RecipeListing({ recipes }: RecipeListingProps) {
    if (recipes.data.length === 0) {
        return (
            <div>No Recipes Found...</div>
        )
    }
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 grid-auto-flow">
             {
                recipes.data.map(recipe => (
                    <li key={recipe.id} className="flex flex-col h-full">
                        <div className="flex-1">
                            <RecipeCard recipe={recipe} />
                        </div>
                    </li>
                ))
             }
        </ul>
    )
}