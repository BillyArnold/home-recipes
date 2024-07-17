import RecipeListing from "@/components/RecipeListing";
import PageTitle from "@/components/ui/PageTitle";

export default function Home() {
  return (
    <main className="">
      <PageTitle title="Recipes"/>
      <RecipeListing />
    </main>
  );
}
