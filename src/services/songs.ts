import { Song } from "../types"

export const getAllSongs = async () => {
    const response = localStorage.getItem('songs')

    if (response) {
        return JSON.parse(response)
    } else {
        return []
    }
}

export const createSong = async (song: Song) => {
    const response = localStorage.getItem('songs')

    if (response) {
        const songs = JSON.parse(response)
        songs.push(song)
        localStorage.setItem('songs', JSON.stringify(songs))
    } else {
        localStorage.setItem('songs', JSON.stringify([song]))
    }
}