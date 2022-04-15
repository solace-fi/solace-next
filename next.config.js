/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
  /cover
  /terms
  /bond
  /stake
  /farms
  /govern
  /archive
  */
  redirects: () => [
    {
      source: '/cover',
      destination: 'https://app.solace.fi/cover',
      permanent: true,
    },
    {
      source: '/terms',
      destination: 'https://app.solace.fi/terms',
      permanent: true,
    },
    {
      source: '/bond',
      destination: 'https://app.solace.fi/bond',
      permanent: true,
    },
    {
      source: '/stake',
      destination: 'https://app.solace.fi/stake',
      permanent: true,
    },
    {
      source: '/farms',
      destination: 'https://app.solace.fi/farms',
      permanent: true,
    },
    {
      source: '/govern',
      destination: 'https://app.solace.fi/govern',
      permanent: true,
    },
    {
      source: '/archive',
      destination: 'https://app.solace.fi/archive',
      permanent: true,
    },
  ],
}

module.exports = nextConfig
