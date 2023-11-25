export const aboutUsPage = {
    name: 'aboutUs',
    title: 'About Us Page',
    type: 'document', 
    fields: [
        {
            name: 'mainImage',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'color',
            title: 'Color',
            type: 'string',
            validation: (Rule) => Rule.regex(/^#[0-9A-Fa-f]{6}$/).warning('Should be a valid color hex code'),
        },
        {
            name: 'subHeader',
            title: 'Sub Header',
            type: 'string'
        },
        {
            name: 'header',
            title: 'Header',
            type: 'string'
        },
        {
            name: 'writer',
            title: 'Writer',
            type: 'string'
        },
        {
            name: 'text',
            title: 'Text',
            type: 'text'
        }
    ]
}