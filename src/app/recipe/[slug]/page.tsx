import getRecipe from "@/actions/getRecipe"
import MethodRenderer from "@/components/MethodRenderer"
import PageTitle from "@/components/ui/PageTitle"
import Image from "next/image"
import Link from "next/link"

export default async function RecipePage({ params }: { params: { slug: string } }) {
    const recipeRes = await getRecipe(params.slug)
    const recipe = recipeRes.data[0]
    return (
        <main>
            <div className="mt-6">
                <Link className="font-bold" href="/">Back to search</Link>
            </div>
            <PageTitle title={recipe.attributes.Title} />

            <Image
                className="w-full mb-8 lg:h-64 object-cover rounded-md"
                alt={recipe.attributes.Title}
                width={recipe.attributes.FeaturedImage.data.attributes.width}
                height={recipe.attributes.FeaturedImage.data.attributes.height}
                src={`${process.env.MEDIA_URL}${recipe.attributes.FeaturedImage.data.attributes.formats.large.url}`}
            />

            <section className="pb-4">
                <h2 className="text-xl font-bold mb-4">
                    Ingredients
                </h2>
                <ul className="md:flex md:flex-wrap">
                    {recipe.attributes.Ingredients.map(ingr => (
                        <li className="md:w-1/2" key={ingr.id}>{ingr.Amount}{ingr.Unit !== 'items' && ingr.Unit} {ingr.ingredient.data.attributes.Name}</li>
                    ))}
                </ul>
            </section>

            <section className="pb-4">
                <h2 className="text-xl font-bold mb-4">
                    Method
                </h2>
                <MethodRenderer method={recipe.attributes.Method} />
            </section>
        </main>
    )
}