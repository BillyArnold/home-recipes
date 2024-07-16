import RecipeListing from "@/components/RecipeListing";

export default function Home() {
  return (
    <main className="">
      <div className="p-6 m-auto text-center">
        <h1 className="text-2xl font-bold">Recipes</h1>
      </div>

      <div className="max-w-3xl lg:max-w-5xl px-8 m-auto">
        <RecipeListing />
      </div>
    </main>
  );
}
