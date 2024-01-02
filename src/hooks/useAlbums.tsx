import { useState, useEffect } from 'react'

import { Album } from '../types'
import { getAllAlbums, createAlbum } from '../services/albums'

const useAlbums = () => {
  const [albums, setAlbums] = useState<Album[]>([])

  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [potrait, setPotrait] = useState('')
  const [songs, setSongs] = useState('')

  const [isFormValid, setIsFormValid] = useState(false)

  const handleGetAlbums = async () => {
    const albums = await getAllAlbums()

    setAlbums(albums)
  }

  useEffect(() => {
    handleGetAlbums()
  }, [])

  useEffect(() => {
    if (
      title !== '' &&
      genre !== '' &&
      releaseDate !== '' &&
      potrait !== '' &&
      songs !== ''
    ) {
      setIsFormValid(true)
    }
    else {
      setIsFormValid(false)
    }
  }, [title, genre, releaseDate, potrait, songs])

  const clearForm = () => {
    setTitle('')
    setGenre('')
    setReleaseDate(Date)
    setPotrait('')
    setSongs('')
  }

  const handleCreateAlbum = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newAlbum = {
      title,
      genre,
      potrait,
      songs,
      releaseDate: new Date(releaseDate)
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
    songs,
    setSongs,
    isFormValid,

    handleCreateAlbum
  }
}

export default useAlbums
