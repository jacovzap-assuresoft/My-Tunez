import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getAlbumsByArtist } from '../services/albums'
import { getSingleArtist } from '../services/artists'

import { Album, Artist } from '../types'

const useArtistAlbums = () => {
  const { artistId } = useParams()
  const [artist, setArtist] = useState<Artist>()
  const [albums, setAlbums] = useState<Album[]>([])

  const handleGetArtistAlbums = async () => {
    const albums = await getAlbumsByArtist(artistId as string)
    const artist = await getSingleArtist(artistId as string)

    if (artist) setArtist(artist)
    setAlbums(albums)
  }

  useEffect(() => {
    handleGetArtistAlbums()
  }, [])

  return {
    artist,
    albums
  }
}

export default useArtistAlbums
