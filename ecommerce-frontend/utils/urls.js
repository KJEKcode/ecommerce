export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_BF21B14E50724782'

export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51I0HObAFyRYDENQ9SdLhTOpBaeCYItJEtMR4GMziiy2iroaZruK0ME2Ri9wCLfpCPcRzWwDQACqCkvmHJ9axkYwx00R2CbW1h0'
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