//aboutUs__primary => about/primary -> slug
//our-history => about/history -> slug
//vision-and-mission => about/vision&mision -> slug
//values-and-ethos => about/value -> slug
export const aboutPages = {
    name: 'aboutUsPage',
    title: 'About Us Pages',
    type: 'document',
    fields: [
        {
            name: 'mainImage',
            title: 'Hero Image',
            type: 'image'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'color',
            title: 'Color',
            type: 'string',
            validation: (Rule) => Rule.regex(/^#[0-9A-Fa-f]{6}$/).warning('Should be a valid color hex code'),
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name:'path',
            title: 'Path',
            type: 'string'
        },
        {
            name: 'header',
            title: 'Header',
            type: 'string'
        },
        {
            name: 'text',
            title: 'Text',
            type: 'text'
        },
        {
            name: 'vision',
            title: 'Our Vision',
            type: 'text',
        },
        {
            name: 'mission',
            title: 'Our Mission',
            type: 'text'
        },
        {
            name: 'beliefs',
            title: 'Beliefs',
            type: 'text'
        },
        {
            name: 'bodyImage',
            title: 'Body Image',
            type: 'image',
        }
    ]
}