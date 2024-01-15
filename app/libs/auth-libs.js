import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const authUserGithub = async () => {
    const authSession = await getServerSession(authOptions)
    return authSession?.user
    // return authSession && authSession.user
}