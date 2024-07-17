import { Recipe, RecipeResponse } from "@/types";

const getRecipe = async (slug: string): Promise<RecipeResponse> => {
    const res = await fetch(`${process.env.API_DOMAIN}recipes/?filters[slug][$eq]=${slug}&populate[Ingredients][populate]=*&populate[FeaturedImage][populate]=*`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.API_BEARER}`
        },
        cache: 'no-cache'
    });

    const data = await res.json();
    return data;
}

export default getRecipe;