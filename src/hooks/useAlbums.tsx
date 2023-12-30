import { useState, useEffect } from 'react'

import { Album } from '../types'
import { getAllAlbums, createAlbum } from '../services/albums'

const useAlbums = () => {
  const [albums, setAlbums] = useState<Album[]>([])

  const [title, setTitle] = useState('')
  const [gender, setGender] = useState('')
  const [releaseDate, setReleaseDate] = useState(Date)
  const [potrait, setPotrait] = useState('')
  const [songs, setSongs] = useState('')

  const handleGetAlbums = async () => {
    const albums = await getAllAlbums()

    setAlbums(albums)
  }

  useEffect(() => {
    handleGetAlbums()
  }, [])

  const clearForm = () => {
    setTitle('')
    setGender('')
    setReleaseDate(Date)
    setPotrait('')
    setSongs('')
  }

  const handleCreateAlbum = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newAlbum = {
      title,
      gender,
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
    gender,
    setGender,
    releaseDate,
    setReleaseDate,
    potrait,
    setPotrait,
    songs,
    setSongs,

    handleCreateAlbum
  }
}

export default useAlbums
