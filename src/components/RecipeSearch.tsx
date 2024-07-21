'use client'

import { useCallback, useState } from "react"
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { revalidatePath } from "next/cache";

interface RecipeSearchProps {
    startValue: string | null
}

export default function RecipeSearch({ startValue } : RecipeSearchProps) {
    const [searchVal, setSearchVal] = useState<string>(startValue || "");
    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (searchVal){
            router.push(pathname + '?' + createQueryString('s', searchVal))
        }
    };

    return (
        <form className="w-full flex gap-2" onSubmit={handleSearch}>
            <input 
                type="text" 
                placeholder="search" 
                className="h-12 bg-white rounded-md p-4 flex-grow" 
                value={searchVal} 
                onChange={e => setSearchVal(e.target.value)} 
            />
            <button 
                type="submit"
                className="bg-green-700 text-white rounded-md px-4 h-12"
            >
                Search
            </button>
        </form>
    )
}