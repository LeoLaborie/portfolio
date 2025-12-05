import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Léo Laborie - Portfolio',
        short_name: 'Léo Laborie',
        description: 'Portfolio de Léo Laborie, étudiant en Génie Informatique à l\'UTC',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
            {
                src: '/images/moi.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}
