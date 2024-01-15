import Image from "next/image";
import Link from "next/link";

const CardRecommendAnime = ({ recommendList }) => {
    const shuffledRecommendList = (recommendList || []).sort(() => Math.random() - 0.5);
    return ( 
        <div className='grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
            {recommendList?.slice(0, 10).sort(() => Math.random()).map((recommend, index) => (
                <div key={index} className='bg-warnaku-accent shadow-xl rounded-[13px]'>
                    <Link href={`/anime/${recommend.mal_id}`} className="">
                        <Image src={recommend.imageUrl} width={150} height={150} alt='Gambar anime'
                            className="rounded-[13px] w-full object-cover max-h-72 cursor-pointer
                            hover:transition-all hover:scale-[1.08]"
                        />
                        <p className='font-bold text-warnaku-primary md:text-md sm:text-sm p-2 '>{recommend.title}</p>
                        {/* <p className='font-bold text-warnaku-dark md:text-xl sm:text-sm p-2 '>{recommend.score}</p> */}
                    </Link>
                </div>
            ))}
        </div>
    );
}
export default CardRecommendAnime;