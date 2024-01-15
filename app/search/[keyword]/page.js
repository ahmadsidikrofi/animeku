import CardTopAnime from "@/app/components/CardTopAnime";
import Header from "@/app/components/Header";
import axios from "axios";

const Search = async({ params }) => {
    const { keyword } = params
    const decodeKeyword = decodeURI(keyword)
    const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${decodeKeyword}`)
    const resultAnimeSearch = response.data
    return ( 
        <section className="p-4">
            <Header headerTitle={`Hasil pencarian anime ${decodeKeyword}...`} />
            <CardTopAnime animesList={resultAnimeSearch}/>
        </section>
    );
}
 
export default Search;