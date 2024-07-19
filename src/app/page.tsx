import getRecipes from "@/actions/getRecipes";
import RecipeListing from "@/components/RecipeListing";
import RecipeSearch from "@/components/RecipeSearch";
import PageTitle from "@/components/ui/PageTitle";
import { useEffect } from "react";

interface HomeProps {
  searchParams: {
    s: string | null
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const recipes = await getRecipes(searchParams.s);
  return (
    <main className="">
      <PageTitle title="Recipes"/>

      <RecipeSearch startValue={searchParams.s} />
      <div className="mb-4"></div>

      <RecipeListing recipes={recipes} />
    </main>
  );
}
