/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['upload.wikimedia.org', 'firebasestorage.googleapis.com', 'images.pexels.com']
    },
    // typescript: {
    //     // temp add for error " Type '() => Promise<{ exploreDatas: SmallCardData[]; cardsDatas: MediumCardData[]; }>' is not assignable to type 'never'.  "
    //     // Based on the solution to a similar problem at: https://github.com/nextauthjs/next-auth/issues/8380
    //     ignoreBuildErrors: true,
    // },
}

module.exports = nextConfig
