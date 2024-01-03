import { useState, useEffect } from 'react'
import ShortUniqueId from 'short-unique-id'

import { Artist } from '../types'
import { getAllArtists, createArtist } from '../services/artists'

import useToast from './useToast'

const useArtists = () => {
  const [artists, setArtists] = useState<Artist[]>([])

  const [name, setName] = useState('')
  const [genres, setGenres] = useState<string[]>([])
  const [integrants, setIntegrants] = useState<string[]>([])
  const [website, setWebsite] = useState('')
  const [image, setImage] = useState('')

  const [genre, setGenre] = useState('')
  const [integrant, setIntegrant] = useState('')

  const [isFormValid, setIsFormValid] = useState(false)

  const toast = useToast()

  const handleGetArtists = async () => {
    const response = await getAllArtists()
    setArtists(response)
  }

  useEffect(() => {
    handleGetArtists()
  }, [])

  useEffect(() => {
    if (
      name !== '' &&
      genres.length !== 0 &&
      integrants.length !== 0 &&
      website !== '' &&
      image !== ''
    ) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }, [name, genres, integrants, website, image])

  const clearForm = () => {
    setName('')
    setGenres([])
    setIntegrants([])
    setWebsite('')
    setImage('')
  }

  const handleCreateArtist = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newArtist = {
      id: new ShortUniqueId({ length: 10 }).rnd(),
      name,
      genres,
      integrants,
      website,
      image
    }

    await createArtist(newArtist)
    await handleGetArtists()
    clearForm()
    toast.toastSuccess('Artist created successfully!')
  }

  const handleAddGenre = () => {
    if (genre !== '') {
      setGenres([...genres, genre])
      setGenre('')
    }
  }

  const handleAddIntegrant = () => {
    if (integrant !== '') {
      setIntegrants([...integrants, integrant])
      setIntegrant('')
    }
  }

  const handleRemoveGenre = (index: number) => {
    const filteredGenres = genres.filter((_, i) => i !== index)
    setGenres(filteredGenres)
  }

  const handleRemoveIntegrant = (index: number) => {
    const filteredIntegrants = integrants.filter((_, i) => i !== index)
    setIntegrants(filteredIntegrants)
  }

  return {
    artists,
    name,
    setName,
    genres,
    setGenres,
    integrants,
    setIntegrants,
    website,
    setWebsite,
    image,
    setImage,

    isFormValid,
    setIsFormValid,

    genre,
    setGenre,
    integrant,
    setIntegrant,

    handleCreateArtist,
    handleAddGenre,
    handleAddIntegrant,
    handleRemoveGenre,
    handleRemoveIntegrant
  }
}

export default useArtists
