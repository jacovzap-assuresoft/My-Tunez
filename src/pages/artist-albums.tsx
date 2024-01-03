import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import AlbumGallery from '../components/albums/album-gallery'

import { getAlbumsByArtist } from '../services/albums'
import { getSingleArtist } from '../services/artists'
import { Album, Artist } from '../types'

const ArtistAlbums = () => {
  const [artist, setArtist] = useState<Artist>()
  const [albums, setAlbums] = useState<Album[]>([])
  const { artistId } = useParams()

  const handleGetArtistAlbums = async () => {
    const albums = await getAlbumsByArtist(artistId as string)
    const artist = await getSingleArtist(artistId as string)

    if (artist) setArtist(artist)
    setAlbums(albums)
  }

  useEffect(() => {
    handleGetArtistAlbums()
  }, [])

  return (
    <div className='grow flex flex-col px-7 py-11 space-y-10'>
      <section className='flex space-x-10'>
        <img src={artist?.image} alt='' className='w-[220px] rounded-lg' />
        <div className='space-y-2'>
          {artist && (
            <h1 className=' text-4xl font-bold text-gray-700'>{artist.name}</h1>
          )}
          <div className='flex space-x-2'>
            <p className='font-semibold text-gray-600'> Integrants: </p>
            {artist &&
              artist?.integrants.map(integrant => (
                <p className=' text-gray-600' key={integrant}>
                  {' '}
                  {integrant}{' '}
                </p>
              ))}
          </div>
          <div className='flex space-x-2'>
            <p className='font-semibold text-gray-600'> Genres: </p>
            {artist &&
              artist?.genres.map(genre => (
                <p className=' text-gray-600' key={genre}>
                  {' '}
                  {genre}.{' '}
                </p>
              ))}
          </div>
          <p className='text-red-700 hover:text-red-800'>
            {' '}
            <a href={`https://${artist?.website}`} target='_blank'>
              {artist?.website}
            </a>
          </p>
        </div>
      </section>
      <hr />
      <section className='space-y-2'>
        <div>
          <h1 className='pl-2 text-2xl font-bold text-gray-700'>Albums</h1>
        </div>
        <AlbumGallery albums={albums} />
      </section>
    </div>
  )
}

export default ArtistAlbums
