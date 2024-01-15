import prisma from "@/app/libs/prismaDb"

export async function POST ( request ) {
    const { anime_mal_id, anime_name, comment, rating, user_email, username, user_image } = await request.json()
    const data = { anime_mal_id, anime_name, comment, rating, user_email, username, user_image }

    const createComment = await prisma.comments.create({ data })
    if ( !createComment ) return Response.json({ status: 500, isCreated: false })
    else return Response.json({ status: 200, isCreated: true })
}

// export async function GET () {
//     return Response.json({ data: "Halo api ini untuk komen nanti" })
// }