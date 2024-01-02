import { useState, useEffect } from 'react'

import { Artist } from '../types'
import { getAllArtists, createArtist } from '../services/artists'

const useArtists = () => {
  const [artists, setArtists] = useState<Artist[]>([])

  const [name, setName] = useState('')
  const [genres, setGenders] = useState<string[]>([])
  const [integrants, setIntegrants] = useState<string[]>([])
  const [website, setWebsite] = useState('')
  const [image, setImage] = useState('')

  const [genre, setGender] = useState('')
  const [integrant, setIntegrant] = useState('')

  const [isFormValid, setIsFormValid] = useState(false)

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
    }
    else {
      setIsFormValid(false)
    }
  }, [name, genres, integrants, website, image])

  const clearForm = () => {
    setName('')
    setGenders([])
    setIntegrants([])
    setWebsite('')
    setImage('')
  }

  const handleCreateArtist = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newAlbum = {
      name,
      genres,
      integrants,
      website,
      image
    }

    await createArtist(newAlbum)
    await handleGetArtists()
    clearForm()
  }

  const handleAddGender = () => {
    if (genre !== '') {
      setGenders([...genres, genre])
      setGender('')
    }
  }

  const handleAddIntegrant = () => {
    setIntegrants([...integrants, integrant])
    setIntegrant('')
  }

  const handleRemoveGender = (index: number) => {
    console.log(index)
    const filteredGenders = genres.filter((_, i) => i !== index)
    setGenders(filteredGenders)
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
    setGenders,
    integrants,
    setIntegrants,
    website,
    setWebsite,
    image,
    setImage,

    isFormValid,
    setIsFormValid,

    genre,
    setGender,
    integrant,
    setIntegrant,

    handleCreateArtist,
    handleAddGender,
    handleAddIntegrant,
    handleRemoveGender,
    handleRemoveIntegrant
  }
}

export default useArtists
