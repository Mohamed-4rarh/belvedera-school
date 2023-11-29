import { groq } from "next-sanity";
import { client } from "./client";

export async function getMainPage(slug) {
    if(slug) {
        try {
            return client.fetch(
                groq`
                    *[_type == 'mainPages' && slug.current == $slug][0]{
                        "mainImage": mainImage.asset->url,
                        title,
                        slug,
                        subHeader,
                        header,
                        color,
                        secondaryColor,
                        text,
                        "bodyImage": bodyImage.asset->url
                    }
                `, {
                    slug
                }, {
                    cache: 'no-store'
                }
            )
        } catch (error) {
            console.log(`DATA_FETCHING_ERROR: ${error}`)
        }
    }
}

export async function aboutUs() {
    try {
        return client.fetch(
            groq`
                *[_type == 'aboutUs'][0] {
                    "mainImage": mainImage.asset->url,
                    color,
                    title,
                    subHeader,
                    header,
                    writer,
                    text,
                }
            `
        )
    } catch (error) {
        console.log(error)
    }
}
//get about_us nested pages
export async function aboutUsPages(slug) {
    try {
        if(slug) {
            return client.fetch(
                groq`
                    *[_type == 'aboutUsPage' && slug.current == $slug][0] {
                        "mainImage": mainImage.asset->url,
                        "bodyImage": bodyImage.asset->url,
                        slug,
                        path,
                        title,
                        color,
                        subHeader,
                        header,
                        text,
                        vision,
                        mission,
                        beliefs
                    }
                `,{slug},
                {cache: 'no-store'}
            )
        }
        return client.fetch(
            groq`
                *[_type == 'aboutUsPage'] {
                    "mainImage": mainImage.asset->url,
                    "bodyImage": bodyImage.asset->url,
                    slug,
                    path,
                    color,
                    title,
                    header,
                    text,
                    vision,
                    mission,
                    beliefs
                }
            `,{},
            {cache: 'no-store'}
        )
    } catch (error) {
        console.log(error)
    }
}