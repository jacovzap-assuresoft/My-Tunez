import { useState, useEffect, useMemo } from 'react'
import ShortUniqueId from 'short-unique-id'

import { Album, Artist } from '../types'
import { getAllArtists } from '../services/artists'
import { getAllAlbums, createAlbum } from '../services/albums'

import useToast from './useToast'

interface SelectFormat {
  label: string
  value: string
}

const useAlbums = () => {
  const id = useMemo(() => new ShortUniqueId({ length: 10 }).rnd(), [])

  const [albums, setAlbums] = useState<Album[]>([])

  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [cover, setCover] = useState('')
  const [artistId, setArtistId] = useState('')

  const [isFormValid, setIsFormValid] = useState(false)
  const [artists, setArtists] = useState<SelectFormat[]>([])

  const toast = useToast()

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
    if (title !== '' && genre !== '' && releaseDate !== '' && cover !== '') {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }, [title, genre, releaseDate, cover])

  const clearForm = () => {
    setTitle('')
    setGenre('')
    setReleaseDate('')
    setCover('')
    setArtistId('')
  }

  const handleCreateAlbum = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const artistName = artists.find(artist => artist.value === artistId)?.label || ''

    const newAlbum = {
      id,
      title,
      genre,
      cover,
      artistId,
      artistName,
      releaseDate,
      songs: []
    }

    await createAlbum(newAlbum)
    await handleGetAlbums()
    clearForm()
    toast.toastSuccess('Album created successfully')
  }

  return {
    albums,
    title,
    setTitle,
    genre,
    setGenre,
    releaseDate,
    setReleaseDate,
    cover,
    setCover,

    artistId,
    setArtistId,
    artists,
    isFormValid,

    handleCreateAlbum
  }
}

export default useAlbums
