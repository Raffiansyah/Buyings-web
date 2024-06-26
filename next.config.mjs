/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'gmbkuvbumdfntrceegai.supabase.co'
          },
        ],
      },
};

export default nextConfig;
