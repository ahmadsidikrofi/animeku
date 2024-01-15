"use client"

import { useEffect, useState } from "react";
import HeaderAllAnime from "../components/HeaderAllAnime";
import Pagination from "../components/Pagination";
import axios from "axios";
import CardTopAnime from "../components/CardTopAnime";

const Page = () => {
    const [page, setPage] = useState(1)
    const [lastPage, setLastPage] = useState("...")
    const [animesList, setAnimeList] = useState([])
    const getAnime = async () => {
        const response = await axios.get(`https://api.jikan.moe/v4/top/anime?page=${page}`)
        setAnimeList(response.data)
        setLastPage(response.data.pagination.last_visible_page)
    }
    useEffect(() => {
        getAnime()
    }, [page])
    return ( 
        <div className="p-5">
            <HeaderAllAnime />
            <CardTopAnime animesList={animesList} />
            <Pagination page={page} setPage={setPage} lastPage={lastPage}/>
        </div>
    );
}
 
export default Page;