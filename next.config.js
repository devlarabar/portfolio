/** @type {import('next').NextConfig} */

const nextConfig = {
    turbopack: {},
    async redirects() {
        return [
            {
                source: "/admin",
                destination: "/admin/index.html",
                permanent: false,
            },
        ]
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.node/,
            use: 'raw-loader',
        })

        return config
    },
}

module.exports = nextConfig
