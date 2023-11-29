// this schema will handle the mainPages(pages includes pages) that is commonly in design like:
//  -About Us Page => slug == 'about-us'
//  -Life And Learning => slug == 'life-and-learning'
//  -A Broad Curricular => slug == 'a-broad-curriculum'
//  -Extra Curricula Activities => slug == 'extra-curricula-activities'

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
            name: 'bodyImage',
            title: 'Body Image',
            type: 'image'
        }
    ]
}