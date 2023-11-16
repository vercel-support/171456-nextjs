/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/figma',
        destination: 'https://www.figma.com/proto/Vm0Ov9llGy9ww5HFfYIvqw/SPECIAL-OFFER%252C-Inc-%E2%80%94%C2%A0Portfolio?page-id=505%3A7290&type=design&node-id=505-7293&viewport=78%2C676%2C0.13&t=YF1lWjcdwB50wyXI-1&scaling=contain&mode=design',
        permanent: false,
      },
      {
        source: '/vercel',
        destination: 'https://vercel.com',
        permanent: false
      }
    ]
  },
}

module.exports = nextConfig
