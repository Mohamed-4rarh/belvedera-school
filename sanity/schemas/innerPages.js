export const innerPages = {
    name: 'innerPages',
    title: 'Inner Pages',
    type: 'document',
    fields: [
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'subHeader',
            title: 'SubHeader',
            type: 'string'
        },
        {
            name: 'header',
            tite: 'Header',
            type: 'string'
        },
        {
            name: 'color',
            title: 'Title Back-Color',
            type: 'string',
            validation: (Rule) => Rule.regex(/^#[0-9A-Fa-f]{6}$/).warning('Should be a valid color hex code'),
        },
        {
            name: 'secondaryColor',
            title: 'Header Font-Color',
            type: 'string',
            validation: (Rule) => Rule.regex(/^#[0-9A-Fa-f]{6}$/).warning('Should be a valid color hex code'),
        },
        {
            name: 'text',
            title: 'Text',
            type: 'text'
        },
        {
            name: 'subject',
            title: 'Subject',
            type: 'string'
        },
        {
            name: 'subjectText',
            title: 'Subject Text',
            type: 'text'
        },
        {
            name: 'bodyImage',
            title: 'Body Image',
            type: 'image'
        }
    ]
}