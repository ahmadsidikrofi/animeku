/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'cdn.myanimelist.net',
            },
            {
                hostname: 'avatars.githubusercontent.com',
                protocol: 'https'
            }
        ]
    }
}

module.exports = nextConfig
