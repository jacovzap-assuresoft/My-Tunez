import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Album, Artist } from '../types'
import { getAllArtists } from '../services/artists'
import { getAllAlbums, createAlbum } from '../services/albums'

interface SelectFormat {
  label: string
  value: string
}

const useAlbums = () => {
  const [albums, setAlbums] = useState<Album[]>([])

  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [potrait, setPotrait] = useState('')
  const [artistId, setArtistId] = useState('')

  const [isFormValid, setIsFormValid] = useState(false)
  const [artists, setArtists] = useState<SelectFormat[]>([])

  const handleGetAlbums = async () => {
    const albums = await getAllAlbums()
    setAlbums(albums)
  }

  const handleGetArtists = async () => {
    const artists = await getAllArtists()
    const format = artists.map((artist: Artist) => {
      return {
        label: artist.name,
        value: artist.id
      }
    })
    setArtists(format)
  }

  useEffect(() => {
    handleGetAlbums()
    handleGetArtists()
  }, [])

  useEffect(() => {
    if (title !== '' && genre !== '' && releaseDate !== '' && potrait !== '') {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }, [title, genre, releaseDate, potrait])

  const clearForm = () => {
    setTitle('')
    setGenre('')
    setReleaseDate('')
    setPotrait('')
    setArtistId('')
  }

  const handleCreateAlbum = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const artistName = artists.find(artist => artist.value === artistId)?.label || ''

    const newAlbum = {
      id: uuidv4(),
      title,
      genre,
      potrait,
      artistId,
      artistName,
      releaseDate,
      songs: []
    }

    await createAlbum(newAlbum)
    await handleGetAlbums()
    clearForm()
  }

  return {
    albums,
    title,
    setTitle,
    genre,
    setGenre,
    releaseDate,
    setReleaseDate,
    potrait,
    setPotrait,

    artistId,
    setArtistId,
    artists,
    isFormValid,

    handleCreateAlbum
  }
}

export default useAlbums
