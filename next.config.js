/** @type {import('next').NextConfig} */


const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  //   loader: 'custom',
  //   loaderFile: './my-loader.ts'
  },
}

module.exports = nextConfig
