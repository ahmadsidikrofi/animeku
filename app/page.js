import CardTopAnime from './components/CardTopAnime'
import Header from './components/Header'
import { getRecommendedAnime, getAnimeData } from './libs/api-libs'
import CardRecommendAnime from './components/CardRecommendAnime'

export default async function Page () {
  // const [animesList, setAnimeList] = useState([])
  // const response = await axios.get('https://api.jikan.moe/v4/top/anime?limit=10')
  const animesList = await getAnimeData('top/anime', 'limit=10')
  // setAnimeList(response.data)

  const recommendList = await getRecommendedAnime('anime')
  return (
    <>
      {/* Top Rating anime */}
      <section className='p-4'>
        <Header headerTitle="Top Rating Anime" headerLink="/" headerGetAll="Lihat semua anime"/>
        <CardTopAnime animesList={animesList}/>
      </section>
      {/* Anime terrekomendasi */}
      <section className='p-4'>
          <Header headerTitle="Anime TerRekomendasi" />
          <CardRecommendAnime recommendList={recommendList}/>
      </section>
    </>
  )
}
