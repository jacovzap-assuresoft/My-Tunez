import AlbumGallery from '../components/albums/album-gallery'
import useArtistAlbums from '../hooks/useArtistAlbums'

const ArtistAlbums = () => {
  const { artist, albums } = useArtistAlbums()

  return (
    <div className='grow flex flex-col px-7 py-11 space-y-10 mb-28'>
      <section className='flex space-x-10 items-center'>
        <img src={artist?.image} alt='' className='w-[220px] rounded-full' />
        <div className='space-y-2'>
          <h1 className=' text-4xl font-bold text-gray-700'>{artist?.name}</h1>
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
