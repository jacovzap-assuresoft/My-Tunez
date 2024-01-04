import { Song } from "../types"

export const getAllSongs = async () => {
    const response = localStorage.getItem('songs')

    if (response) {
        return JSON.parse(response)
    } else {
        return []
    }
}

export const getSongsByAlbum = async (albumId: string) => {
    const response = localStorage.getItem('songs')

    if (response) {
        const songs = JSON.parse(response)
        return songs.filter((song: Song) => song.albumId === albumId)
    } else {
        return []
    }
}

export const createSong = async (song: Song) => {
    const response = localStorage.getItem('songs')

    if (response) {
        const songs = JSON.parse(response)
        songs.push(song)
        songs.sort((a: Song, b: Song) => a.title.localeCompare(b.title))
        localStorage.setItem('songs', JSON.stringify(songs))
    } else {
        localStorage.setItem('songs', JSON.stringify([song]))
    }
}