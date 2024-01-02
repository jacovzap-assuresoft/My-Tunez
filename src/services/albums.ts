import { Album } from "../types"

export const getAllAlbums = async () => {
    const response = localStorage.getItem('albums')

    if (response) {
        return JSON.parse(response)
    } else {
        return []
    }
}

export const getSingleAlbum = async (id: string): Promise<Album | null> => {
    const response = localStorage.getItem('albums')

    if (response) {
        const albums = JSON.parse(response)
        return albums.find((album: Album) => album.id === id)
    } else {
        return null
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

export const addSongToAlbum = async (albumId: string, songId: string) => {
    const response = localStorage.getItem('albums')

    if (response) {
        const albums = JSON.parse(response)
        const album = albums.find((album: Album) => album.id === albumId)
        if (album) {
            album.songs.push(songId)
            localStorage.setItem('albums', JSON.stringify(albums))
        }
    }
}