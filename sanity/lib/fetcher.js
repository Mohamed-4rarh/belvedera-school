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
    } else {
        console.log('MISSING_SLUG_PROVIDER')
    }
}

export async function getInnerPage(slug) {
    if(slug) {
        try {
            return client.fetch(
                groq`
                    *[_type == 'innerPages' && slug.current == $slug][0] {
                        "mainImage": mainImage.asset->url,
                        title,
                        slug,
                        subHeader,
                        header,
                        color,
                        secondaryColor,
                        text,
                        subject,
                        subjectText,
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
    } else {
        console.log('MISSING_SLUG_PROVIDER')
    }
}

export async function getInnerPagesCards(schemaType, partOf) {
    if(partOf && schemaType) {
        try {
            return client.fetch(
                groq`
                    *[_type == '${schemaType}' && partOf == $partOf] | order(_createdAt asc) {
                        "mainImage": mainImage.asset->url,
                        title,
                        text,
                        color,
                        partOf,
                        path,
                        _createdAt
                    }
                `, {
                    partOf
                }, {
                    cache: 'no-store'
                }
            )
        } catch (error) {
            console.log(`DATA_FETCHING_ERROR: ${error}`)
        }
    } else {
        console.log('MISSING_PARTOF_PROVIDER')
    }
}