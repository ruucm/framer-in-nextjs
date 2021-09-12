/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.experiments = {
      buildHttp: true,
    }
    return config
  },
}
