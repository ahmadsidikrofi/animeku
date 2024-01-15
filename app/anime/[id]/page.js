import CollectionButton from "@/app/components/CollectionButton"
import AnimeTrailer from "../../components/AnimeTrailer"
import { authUserGithub } from "@/app/libs/auth-libs"
import axios from "axios"
import Image from "next/image"
import prisma from "@/app/libs/prismaDb"
import KolomKomentar from "@/app/components/KolomKomentar"
import CommentUsers from "@/app/components/CommentUsers"

const DetailAnime = async ({ params: {id} }) => {
    // const {id} = params
    const animeDetail = await axios.get(`https://api.jikan.moe/v4/anime/${id}`)
    const userAuth = await authUserGithub()
    
    // console.log(animeDetail.data)
    // console.log(id, userAuth.email)
    const studios = animeDetail.data.data.studios.map((studio) => (studio.name))
    const formatedStudios = studios.join(', ')
    
    const isCollectible = await prisma.MyCollection.findFirst({
        where: { anime_mal_id: id, user_email: userAuth?.email }
    })

    return (
        <div className="p-5">
            <div className="my-3">
                <h3 className="font-bold text-2xl text-warnaku-secondary">{animeDetail.data.data.title} - {animeDetail.data.data.year}</h3>
                { !isCollectible && userAuth ? 
                    <CollectionButton 
                        anime_mal_id={id} 
                        user_email={userAuth.email}
                        anime_name={animeDetail.data.data.title}
                        anime_image={animeDetail.data.data.images.webp.image_url}
                        anime_score={animeDetail.data.data.score}
                        anime_studio={formatedStudios}
                    /> 
                    : null 
                }
            </div>
            <div className="flex gap-5 my-5 overflow-x-auto text-center">
                <div className="flex flex-col justify-center items-center p-3 rounded-[10px] hover:rounded-[30px] bg-warnaku-secondary text-warnaku-accent font-bold
                    hover:bg-warnaku-accent hover:text-warnaku-primary transition-all ease-linear w-32">
                    <p>PERINGKAT</p>
                    <p className="text-warnaku-primary">{animeDetail.data.data.rank}</p>
                </div>
                <div className="flex flex-col justify-center items-center p-3 rounded-[10px] hover:rounded-[30px] bg-warnaku-secondary text-warnaku-accent font-bold
                    hover:bg-warnaku-accent hover:text-warnaku-primary transition-all ease-linear w-32">
                    <p>STUDIO</p>
                    <p className="text-warnaku-primary">{animeDetail.data.data.studios.map((studio) => (studio.name))}</p>
                </div>
                <div className="flex flex-col justify-center items-center p-3 rounded-[10px] hover:rounded-[30px] bg-warnaku-secondary text-warnaku-accent font-bold
                    hover:bg-warnaku-accent hover:text-warnaku-primary transition-all ease-linear w-32">
                    <p>SKOR</p>
                    <p className="text-warnaku-primary">{animeDetail.data.data.score}</p>
                </div>
                <div className="flex flex-col justify-center items-center p-3 rounded-[10px] hover:rounded-[30px] bg-warnaku-secondary text-warnaku-accent font-bold
                    hover:bg-warnaku-accent hover:text-warnaku-primary transition-all ease-linear w-32">
                    <p>ANGGOTA</p>
                    <p className="text-warnaku-primary">{animeDetail.data.data.members}</p>
                </div>
                <div className="flex flex-col justify-center items-center p-3 rounded-[10px] hover:rounded-[30px] bg-warnaku-secondary text-warnaku-accent font-bold
                    hover:bg-warnaku-accent hover:text-warnaku-primary transition-all ease-linear w-32">
                     <p>POPULARITAS</p>
                    <p className="text-warnaku-primary">{animeDetail.data.data.popularity}</p>
                </div>
                <div className="flex flex-col justify-center items-center p-3 rounded-[10px] hover:rounded-[30px] bg-warnaku-secondary text-warnaku-accent font-bold
                    hover:bg-warnaku-accent hover:text-warnaku-primary transition-all ease-linear w-32">
                    <p>EPISODE</p>
                    <p className="text-warnaku-primary">{animeDetail.data.data.episodes}</p>
                </div>
                <div className="flex flex-col justify-center items-center p-3 rounded-[10px] hover:rounded-[30px] bg-warnaku-secondary text-warnaku-accent font-bold
                    hover:bg-warnaku-accent hover:text-warnaku-primary transition-all ease-linear w-32">
                    <p>MUSIM</p>
                    <p className="text-warnaku-primary">{animeDetail.data.data.season}</p>
                </div>
                <div className="flex flex-col justify-center items-center p-3 rounded-[10px] hover:rounded-[30px] bg-warnaku-secondary text-warnaku-accent font-bold
                    hover:bg-warnaku-accent hover:text-warnaku-primary transition-all ease-linear w-56">
                    <p>STATUS</p>
                    <p className="text-warnaku-primary">{animeDetail.data.data.status}</p>
                </div>
            </div>
            <div className="flex md:flex-nowrap sm:flex-nowrap flex-wrap gap-3">
                <Image 
                    src={animeDetail.data.data.images.webp.image_url}
                    width={650}
                    height={350}
                    className="rounded-[25px] object-cover w-full"
                    alt={animeDetail.data.data.images.jpg.image_url}
                />
                <div>
                    <p className="font-bold text-justify text-lg">{animeDetail.data.data.rating}</p>
                    <p className="font-normal text-justify">{animeDetail.data.data.synopsis}</p>
                </div>
            </div>

            {/* Kommentar */}
            <KolomKomentar anime_mal_id={id} anime_name={animeDetail.data.data.title} user_email={userAuth?.email} username={userAuth?.name} user_image={userAuth?.image} />
              
            <CommentUsers anime_mal_id={id}/>

            <AnimeTrailer trailerId={animeDetail.data.data.trailer.youtube_id} />
        </div>
    )
}
export default DetailAnime