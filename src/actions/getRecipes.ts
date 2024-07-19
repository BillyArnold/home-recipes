import { RecipeResponse } from "@/types";

const getRecipes = async (searchTerm: string | null = null): Promise<RecipeResponse> => {
    let searchUrl = `${process.env.API_DOMAIN}recipes?populate=*`;
    if (searchTerm) {
        searchUrl = `${process.env.API_DOMAIN}recipes?populate=*&filters[Title][$contains]=${searchTerm}`;
    }

    const res = await fetch(searchUrl, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.API_BEARER}`
        },
        cache: 'no-cache',
        next: {
            tags: ['recipeCollection']
        }
    });

    const data = await res.json();
    return data;
}

export default getRecipes;