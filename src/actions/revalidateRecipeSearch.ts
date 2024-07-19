'use server';

import { revalidatePath, revalidateTag } from "next/cache";

export const revalidateRecipeSearch = () => {
    revalidateTag('recipeCollection')
}