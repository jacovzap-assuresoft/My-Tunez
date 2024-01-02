import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Album } from '../types'
import { getAllAlbums, createAlbum } from '../services/albums'

const useAlbums = () => {
  const [albums, setAlbums] = useState<Album[]>([])

  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [potrait, setPotrait] = useState('')

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
      potrait !== ''
    ) {
      setIsFormValid(true)
    }
    else {
      setIsFormValid(false)
    }
  }, [title, genre, releaseDate, potrait])

  const clearForm = () => {
    setTitle('')
    setGenre('')
    setReleaseDate('')
    setPotrait('')
  }

  const handleCreateAlbum = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newAlbum = {
      id: uuidv4(),
      title,
      genre,
      potrait,
      releaseDate: new Date(releaseDate),
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
    isFormValid,

    handleCreateAlbum
  }
}

export default useAlbums
