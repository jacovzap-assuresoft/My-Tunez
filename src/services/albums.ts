import { Album } from "../types"

export const getAllAlbums = async () => {
    const response = localStorage.getItem('albums')

    if (response) {
        return JSON.parse(response)
    } else {
        return []
    }
}

export const createAlbum = async (album: Album) => {
    const response = localStorage.getItem('albums')

    if (response) {
        const albums = JSON.parse(response)
        albums.push(album)
        localStorage.setItem('albums', JSON.stringify(albums))
    } else {
        localStorage.setItem('albums', JSON.stringify([album]))
    }
}