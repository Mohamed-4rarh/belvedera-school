export function textSpliter(text) {
    const splitedText = text.split('*')
    splitedText.filter(item => item.trim() !== '')

    return splitedText;
}

export const NavbarLinks = [
    {
        id: 1,
        title: 'about us',
        path: '/about-us',
        subList: [
            {
                id: 111,
                title: "primary head's welcome",
                path: '/about-us/primary'
            },
            {
                id: 211,
                title: "our history",
                path: '/about-us/history'
            },
            {
                id: 311,
                title: "vision & mission",
                path: '/about-us/vision'
            },
            {
                id: 411,
                title: "values and ethos",
                path: '/about-us/values'
            }
        ]
    },
    {
        id: 2,
        title: 'life & learning',
        path: '/life-and-learning',
        subList: [
            {
                id: 122,
                title: 'academic',
                path: '/life-and-learning/academic'
            },
            {
                id: 222,
                title: 'a broad curriculum',
                path: '/life-and-learning/broad-curriculum'
            },
            {
                id: 322,
                title: 'a early foundation stage',
                path: '/life-and-learning/early-foundation'
            },
            {
                id: 422,
                title: 'primary stage',
                path: '/life-and-learning/primary-stage'
            },
            {
                id: 522,
                title: 'secondary school',
                path: '/life-and-learning/secondary-school'
            },
            {
                id: 622,
                title: 'teaching methodology',
                path: '/life-and-learning/teaching-methodology'
            },
            {
                id: 722,
                title: 'extra currcular activities',
                path: '/life-and-learning/extra-curricular'
            },
            {
                id: 822,
                title: 'sports',
                path: '/life-and-learning/sports'
            },
            {
                id: 922,
                title: 'music',
                path: '/life-and-learning/music'
            },
            {
                id: 1022,
                title: 'drama',
                path: '/life-and-learning/drama'
            },
            {
                id: 1122,
                title: 'art and design',
                path: '/life-and-learning/art-and-design'
            },
            {
                id: 1222,
                title: 'trips',
                path: '/life-and-learning/trips'
            },
        ]
    },
    {
        id: 3,
        title: 'admission',
        path: '/admission/admission-process',
        subList: [
            {
                id: 311,
                title: 'apply now',
                path: '/'
            },
            {
                id: 322,
                title: 'admission process',
                path: '/admission/admission-process'
            }
        ]
    },
    {
        id: 4,
        title: 'news & events',
        path: '/news-and-events',
        subList: [
            {
                id: 411,
                title: 'latest news',
                path: '/news-and-events/latest-news'
            },
            {
                id: 422,
                title: 'events',
                path: '/news-and-events/events'
            },
        ]
    },
    {
        id: 5,
        title: 'portals',
        path: '/portals',
        subList: [
            {
                id: 511,
                title: 'pupils',
                path: '/portals/pupils'
            },
            {
                id: 522,
                title: 'parents',
                path: '/portals/parents'
            },
            {
                id: 533,
                title: 'staff',
                path: '/portals/staff'
            },
        ]
    },
]