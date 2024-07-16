import { RecipeResponse } from "@/types";

const getRecipes = async (): Promise<RecipeResponse> => {
    const res = await fetch(`${process.env.API_DOMAIN}recipes?populate=*`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.API_BEARER}`
        }
    });

    const data = await res.json();
    return data;
}

export default getRecipes;