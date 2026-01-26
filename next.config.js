/** @type {import('next').NextConfig} */

const nextConfig = {
    turbopack: {},
    webpack: (config) => {
        config.module.rules.push({
            test: /\.node/,
            use: 'raw-loader',
        })

        return config
    },
}

module.exports = nextConfig
