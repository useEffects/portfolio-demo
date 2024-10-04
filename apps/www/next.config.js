const createMDX = require('@next/mdx')

/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
            {
                source: '/api/aiml',
                destination:
                    process.env.NODE_ENV === 'development'
                        ? 'http://127.0.0.1:8000/api/aiml'
                        : '/api/aiml',
            },
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
                port: "",
                pathname: "**/*"
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
                pathname: "**/*"
            },
            {
                protocol: "https",
                hostname: "designeration.agency",
                port: "",
                pathname: "**/*"
            },
            {
                protocol: "https",
                hostname: "go.dev",
                port: "",
                pathname: "**/*"
            },
        ]
    }
}

const withMDX = createMDX({
})

module.exports = withMDX(nextConfig)
