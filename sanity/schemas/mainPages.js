// this schema will handle the mainPages(pages includes pages) that is commonly in design like:
//  -About Us Page
//  -Life And Learning
//  -A Broad Curricular
//  -Extra Curricula Activities

export const mainPages = {
    name: 'mainPages',
    title: 'Main Pages',
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
            name: 'bodyImage',
            title: 'Body Image',
            type: 'image'
        }
    ]
}