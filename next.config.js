/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "storage.googleapis.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "blogger.googleusercontent.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "ui-avatars.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "fonts.googleapis.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                pathname: "**",
            },
        ],
    },
}
module.exports = nextConfig
