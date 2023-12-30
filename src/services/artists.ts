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
    const response = localStorage.getItem('albums')

    if (response) {
        const artists = JSON.parse(response)
        artists.push(artist)
        localStorage.setItem('albums', JSON.stringify(artists))
    } else {
        localStorage.setItem('albums', JSON.stringify([artist]))
    }
}