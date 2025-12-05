import React from 'react'

export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Léo Laborie',
        url: 'https://leolaborie.com',
        jobTitle: 'Étudiant en Génie Informatique',
        worksFor: {
            '@type': 'Organization',
            name: 'UTC - Université de Technologie de Compiègne'
        },
        sameAs: [
            'https://github.com/leolaborie',
            'https://linkedin.com/in/leo-laborie'
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
