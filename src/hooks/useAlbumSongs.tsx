import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getSingleAlbum } from '../services/albums'
import { getSongsByAlbum } from '../services/songs'

import { Album, Song } from '../types'

const useAlbumSongs = () => {
  const { albumId } = useParams()
  const [songs, setSongs] = useState<Song[]>([])
  const [album, setAlbum] = useState<Album>()

  const handleGetAlbumSongs = async () => {
    const album = await getSingleAlbum(albumId as string)
    const songs = await getSongsByAlbum(albumId as string)

    if (album) setAlbum(album)
    setSongs(songs)
  }

  useEffect(() => {
    handleGetAlbumSongs()
  }, [])

  return {
    songs,
    album
  }
}

export default useAlbumSongs
