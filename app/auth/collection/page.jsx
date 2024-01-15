
import HeaderAuth from "@/app/components/HeaderAuth"
import { authUserGithub } from "@/app/libs/auth-libs"
import prisma from "@/app/libs/prismaDb"
import Image from "next/image"
import Link from "next/link"

const Collection = async () => {
    const userAuth = await authUserGithub()
    const animeCollections = await prisma.MyCollection.findMany({
        where: { user_email: userAuth?.email },
        orderBy: { id: 'desc' }
    })

    return (
        <div className="p-8">
            <HeaderAuth titleHeader="Anime Koleksiku"/>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 my-10 gap-8">
                {animeCollections.map((myCollection, index) => (
                    <>
                    <Link key={index} href={`/anime/${myCollection.anime_mal_id}`} className="relative rounded-[20px] bg-warnaku-accent">
                        <Image src={myCollection.anime_image} width={300} height={250} alt="..."
                            className="w-full rounded-[20px] object-cover max-h-[400px]
                            hover:transition-all hover:scale-[1.08]"
                        />
                        <div className="absolute top-0 flex justify-center items-center px-10 bg-warnaku-accent rounded-[8px] h-10">
                            <p className="text-warnaku-primary font-bold">{myCollection.anime_studio}</p>
                        </div>
                        <div className="px-5 py-5">
                            <p className="text-warnaku-primary font-bold">{myCollection.anime_name}</p>
                            <p className="text-warnaku-primary mt-3">{myCollection.anime_score}</p>
                        </div>
                    </Link>
                    </>
                ))}
            </div>
        </div>
    )
}
export default Collection