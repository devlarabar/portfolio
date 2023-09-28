/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.node/,
            use: 'raw-loader',
        })

        return config
    },
    target: 'serverless'
}

module.exports = nextConfig