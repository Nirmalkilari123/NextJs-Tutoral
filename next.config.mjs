/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol:"http",
            hostname:"name.jpg"
        }
    ]
    }
};

export default nextConfig;
