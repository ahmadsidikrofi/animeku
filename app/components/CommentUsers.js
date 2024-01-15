import Image from "next/image"
import prisma from "../libs/prismaDb"

const CommentUsers = async ({ anime_mal_id }) => {
    const allComments = await prisma.comments.findMany({
        where: { anime_mal_id },
        orderBy: { id: 'desc' }
    })
    return (
        <div className={`mx-6 ${allComments.length >= 1 ? 'bg-warnaku-secondary' : ''} p-3 rounded-lg lg:w-[75%] md:w-[75%] w-[90%]`}>
            {allComments.map((comment) => (
                <div className="text-warnaku-primary" key={comment.id}>
                    <div className="flex flex-row items-start gap-3 py-5">
                        <Image src={comment.user_image} width={50} height={50} alt="..." className="rounded-full" />
                        <div className="flex flex-col">
                            <p className="font-bold">{comment.username}</p>
                            <p className="font-medium py-2">{comment.comment}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CommentUsers