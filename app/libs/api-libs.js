import axios from "axios"
export async function getAnimeData (resource, query) {
    const anime = await axios.get(`https://api.jikan.moe/v4/${resource}?${query}`)
    const response = anime.data
    return response
}

export async function getRecommendedAnime (resource)  {
    const recommendationAnime = await axios.get(`https://api.jikan.moe/v4/recommendations/${resource}`)
    const recommendationsData  = recommendationAnime.data.data
    const animeRecommendations = recommendationsData.flatMap((recommendationItem) =>
        recommendationItem.entry.map((entryItem) => ({
            mal_id: entryItem.mal_id,
            title: entryItem.title,
            imageUrl: entryItem.images.webp.image_url,
        }))
    );
    return animeRecommendations
}