import { useState, useEffect } from 'react'

import { Artist } from '../types'
import { getAllArtists, createArtist } from '../services/artists'

const useArtists = () => {
  const [artists, setArtists] = useState<Artist[]>([])

  const [name, setName] = useState('')
  const [genders, setGenders] = useState<string[]>([])
  const [integrants, setIntegrants] = useState<string[]>([])
  const [website, setWebsite] = useState('')
  const [image, setImage] = useState('')

  const [gender, setGender] = useState('')
  const [integrant, setIntegrant] = useState('')

  const handleGetArtists = async () => {
    const response = await getAllArtists()

    setArtists(response)
  }

  useEffect(() => {
    handleGetArtists()
  }, [])

  const clearForm = () => {
    setName('')
    setGenders([])
    setIntegrants([])
    setWebsite('')
    setImage('')
  }

  const handleCreateArtist = async () => {
    const newAlbum = {
      name,
      genders,
      integrants,
      website,
      image
    }

    await createArtist(newAlbum)
    await handleGetArtists()
    clearForm()
  }

  const handleAddGender = () => {
    if (gender !== '') {
      setGenders([...genders, gender])
      setGender('')
    }
  }

  const handleAddIntegrant = () => {
    setIntegrants([...integrants, integrant])
    setIntegrant('')
  }

  const handleRemoveGender = (index: number) => {
    console.log(index)
    const filteredGenders = genders.filter((_, i) => i !== index)
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
    genders,
    setGenders,
    integrants,
    setIntegrants,
    website,
    setWebsite,
    image,
    setImage,

    gender,
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
