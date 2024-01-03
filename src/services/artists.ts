import { Artist } from "../types"

export const getAllArtists = async () => {
    const response = localStorage.getItem('artists')

    if (response) {
        return JSON.parse(response)
    } else {
        return []
    }
}

export const createArtist = async (artist: Artist) => {
    const response = localStorage.getItem('artists')

    if (response) {
        const artists = JSON.parse(response)
        artists.push(artist)
        localStorage.setItem('artists', JSON.stringify(artists))
    } else {
        localStorage.setItem('artists', JSON.stringify([artist]))
    }
}

export const getSingleArtist = async (id: string): Promise<Artist | null> => {
    const response = localStorage.getItem('artists')

    if (response) {
        const artists = JSON.parse(response)
        return artists.find((artist: Artist) => artist.id === id)
    } else {
        return null
    }
}