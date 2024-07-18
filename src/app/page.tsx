import RecipeListing from "@/components/RecipeListing";
import RecipeSearch from "@/components/RecipeSearch";
import PageTitle from "@/components/ui/PageTitle";

interface HomeProps {
  searchParams: URLSearchParams
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <main className="">
      <PageTitle title="Recipes"/>

      <RecipeSearch />
      <div className="mb-4"></div>

      <RecipeListing searchParams={searchParams} />
    </main>
  );
}
