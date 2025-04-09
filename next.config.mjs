/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Configure the base path if you're deploying to a GitHub Pages project page
  // For a user/organization site, you can remove this line
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
