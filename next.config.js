/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// next.config.js

module.exports = {
  images: {
    domains: ["fakestoreapi.com", "images.unsplash.com"], // Tambahkan hostname yang diizinkan di sini
  },
};
