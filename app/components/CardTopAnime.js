import Image from "next/image";
import Link from "next/link";

const CardTopAnime = ({ animesList }) => {
    return (
        <div className='grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
            {animesList.data?.map((anime, index) => (
                <div key={index} className='bg-warnaku-accent shadow-xl rounded-[13px]'>
                    <Link href={`/anime/${anime.mal_id}`} className="">
                        <Image src={anime.images.webp.image_url} width={150} height={150} alt='Gambar anime'
                            className="rounded-[13px] w-full object-cover max-h-72 cursor-pointer
                            hover:transition-all hover:scale-[1.08]"
                        />
                        <p className='font-bold text-warnaku-primary md:text-md sm:text-sm p-2 '>{anime.title}</p>
                        <p className='font-bold text-warnaku-dark md:text-xl sm:text-sm p-2 '>{anime.score}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default CardTopAnime;