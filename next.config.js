/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    DB_URI:"mongodb+srv://bilal123:bilal123@cluster0.hphwxrd.mongodb.net/nextcrud?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
