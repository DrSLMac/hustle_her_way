import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    apiVersion: '2024-01-22',
    dataset: 'production',
    projectId: 'b1vqlv1x',
    useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}