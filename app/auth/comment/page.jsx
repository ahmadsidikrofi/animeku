import HeaderAuth from "@/app/components/HeaderAuth"
import { authUserGithub } from "@/app/libs/auth-libs"
import prisma from "@/app/libs/prismaDb"
import Link from "next/link"
import Image from "next/image"

const MyComment = async () => {
    const authUser = await authUserGithub()
    const allMyComment = await prisma.comments.findMany ({
        where: { user_email: authUser?.email },
        orderBy: { id: 'desc' }
    })
    return (
        <div className="p-10">
            <HeaderAuth titleHeader="My Comment" />
            {allMyComment.length < 1 ?
                <div className="flex flex-col justify-center items-center my-24">
                    <h3 className="text-warnaku-secondary font-semibold text-2xl ">Kamu belum pernah memberi argumen / komentar pada anime apapun nih</h3>
                    <Image src="/emptyComment.jpg" width={500} height={500} alt="..."/>
                </div>
                :
                null
            }
            {allMyComment.map((myComment) => (
                <>
                <Link href={`/anime/${myComment.anime_mal_id}`} >
                    <div key={myComment.id} className="my-12 p-3 bg-warnaku-secondary text-warnaku-primary rounded-[20px] 
                        hover:shadow-xl 
                        hover:scale-105 
                        transition-all ease-linear
                    ">
                        <h3 className="font-semibold text-xl mb-4">{myComment.anime_name}</h3>
                        <p>{myComment.comment}</p>
                    </div>
                </Link>
                </>
            ))}
        </div>
    )
}
export default MyComment