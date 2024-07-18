import getRecipes from "@/actions/getRecipes"
import RecipeCard from "./ui/RecipeCard";
import { SEARCH_ID } from "./RecipeSearch";

interface RecipeListingProps {
    searchParams: URLSearchParams | any
}

export default async function RecipeListing({ searchParams }: RecipeListingProps) {
    console.log(searchParams, Object.entries(searchParams))
    for (let key in Object.keys(searchParams)) {
        console.log('key', key)
        if (SEARCH_ID === key){
            console.log('found', searchParams[key]);
        }
    }
    const recipes = await getRecipes();
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