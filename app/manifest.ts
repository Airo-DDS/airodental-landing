import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AiroDental',
    short_name: 'AiroDental',
    description: 'AI-Powered Dental Practice Management',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#09474C',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
} 