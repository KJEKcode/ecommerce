export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'YOUR MAGIC PUBLIC KEY'

export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'YOUR STRIPE PUBLIC KEY'
/**
 * given an image return the URL
 * Works for local and deployed strapis
 * @param {
 * } image 
 */


export const fromImageToUrl = (image) => {
    if (!image){
        return "/vercel.svg"
    }
    if (image.url.indexOf("/") === 0) {
        return `${API_URL}${image.url}`
    }
    return image.url
}