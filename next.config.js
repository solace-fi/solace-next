/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => [
    {
      source: '/cover',
      destination: 'https://app.solace.fi/cover',
      permanent: true,
    },
  ],
}

module.exports = nextConfig
