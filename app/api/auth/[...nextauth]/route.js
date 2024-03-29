import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    secret: process.env.SECRET_APP,
    providers: [
        GithubProvider ({
            clientId: process.env.GITHUB_AUTH_CLIENT_ID,
            clientSecret: process.env.GITHUB_AUTH_CLIENT_SECRET
        })
    ]

}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }