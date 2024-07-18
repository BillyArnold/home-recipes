'use server';

import { revalidateTag } from "next/cache";

export const revalidateRecipeSearch = () => {
    revalidateTag('recipeCollection')
}