/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'My Kasm WorkSpaces',
    description: 'Have fun!.',
    icon: '/img/logo.svg',
    listUrl: 'https://potter-jason.github.io/kasm-registry/',
    contactUrl: 'https://github.com/potter-jason/kasm-registry/issues/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
