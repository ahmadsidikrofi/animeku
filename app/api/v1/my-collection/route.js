import prisma from "@/app/libs/prismaDb"

export async function POST (request) {
    const { anime_mal_id, user_email, anime_name, anime_image, anime_score, anime_studio } = await request.json()
    const data = { anime_mal_id, user_email, anime_name, anime_image, anime_score, anime_studio }

    const createAnimeCollection = await prisma.MyCollection.create({ data })
    if (!createAnimeCollection) return Response.json({ status: 500, isCreated: false })
    else {
        return Response.json({ status: 201, isCreated: true })
    }
}
export async function GET() {
    return Response.json({ data: "Ini api uci coba" })
}