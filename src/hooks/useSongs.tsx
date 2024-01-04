import { useState, useEffect } from 'react'
import ShortUniqueId from 'short-unique-id'

import { Album, Artist, Song } from '../types'
import { getAllSongs, createSong } from '../services/songs'
import { getAllAlbums, addSongToAlbum, getSingleAlbum } from '../services/albums'
import { getAllArtists } from '../services/artists'

import useToast from './useToast'

interface SelectFormat {
  label: string
  value: string
}

const useSongs = () => {
  const [songs, setSongs] = useState<Song[]>([])

  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [artistId, setArtistId] = useState('')
  const [albumId, setAlbumId] = useState('')
  const [duration, setDuration] = useState(NaN)
  const [audio, setAudio] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [isFormValid, setIsFormValid] = useState(false)
  const [albums, setAlbums] = useState<SelectFormat[]>([])
  const [artists, setArtists] = useState<SelectFormat[]>([])

  const toast = useToast()

  const handleGetSongs = async () => {
    const response = await getAllSongs()
    setSongs(response)
  }

  const handleGetAlbums = async () => {
    const response = await getAllAlbums()
    const format = response.map((album: Album) => {
      return {
        label: album.title,
        value: album.id
      }
    })
    setAlbums(format)
  }

  const handleGetArtists = async () => {
    const response = await getAllArtists()
    const format = response.map((artist: Artist) => {
      return {
        label: artist.name,
        value: artist.id
      }
    })
    setArtists(format)
  }

  useEffect(() => {
    handleGetSongs()
    handleGetAlbums()
    handleGetArtists()
  }, [])

  useEffect(() => {
    if (
      title !== '' &&
      genre !== '' &&
      releaseDate !== '' &&
      artistId !== '' &&
      albumId !== '' &&
      !Number.isNaN(duration) &&
      audio !== ''
    ) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }, [title, genre, releaseDate, artistId, albumId, duration, audio])

  const clearForm = () => {
    setTitle('')
    setGenre('')
    setReleaseDate('')
    setArtistId('')
    setAlbumId('')
    setDuration(NaN)
    setAudio('')
  }

  const handleCreateSong = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const artistName = artists.find(artist => artist.value === artistId)?.label || ''
    const albumTitle = albums.find(album => album.value === albumId)?.label || ''

    const singleAlbum = await getSingleAlbum(albumId)

    const newSong = {
      id: new ShortUniqueId({ length: 10 }).rnd(),
      title,
      genre,
      releaseDate,
      artistId,
      artistName,
      albumId,
      albumTitle,
      duration,
      audio,
      cover: singleAlbum?.cover || ''
    }

    await createSong(newSong)
    await addSongToAlbum(albumId, newSong.id)
    await handleGetSongs()
    setIsModalOpen(false)
    clearForm()
    toast.toastSuccess('Song created successfully')
  }

  return {
    songs,
    title,
    setTitle,
    genre,
    setGenre,
    releaseDate,
    setReleaseDate,
    artistId,
    setArtistId,
    albumId,
    setAlbumId,
    duration,
    setDuration,
    audio,
    setAudio,
    isModalOpen,
    setIsModalOpen,

    albums,
    artists,
    isFormValid,

    handleCreateSong
  }
}

export default useSongs
