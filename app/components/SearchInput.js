"use client"

import { useRef, useState } from "react"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const SearchInput = () => {
    const animeSearchRef = useRef()
    // const [searchAnime, setSearchAnime] = useState()
    const router = useRouter()

    const handleInputSearch = (e) => {
        e.preventDefault()
        const keyword = animeSearchRef.current.value.trim()
        console.log('Tercari ✅');
        if (keyword !== "") {
            router.push(`/search/${keyword}`)
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            handleInputSearch(e)
        }
    }
    return (
        <div className="relative">
            <input type="text" className="p-3 rounded-[20px] focus:outline-warnaku-accent focus:transition-all focus:scale-[1.08] text-warnaku-secondary" 
            placeholder="cari anime disini..." ref={animeSearchRef} onKeyDown={handleKeyDown}/>
            <button type="button" onClick={handleInputSearch} className="absolute end-2 top-2 rounded-[15px] bg-warnaku-other p-1">
                <MagnifyingGlass color="#fff" size={24} />
            </button>
        </div>
    )
}

export default SearchInput