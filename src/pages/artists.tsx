import ArtistForm from '../components/artists/artist-form'
import ArtistCard from '../components/artists/artist-card'
import Modal from '../components/modal'

import useArtists from '../hooks/useArtists'

const Artists = () => {
  const artists = useArtists()

  return (
    <div className='grow flex flex-col px-7 py-11 space-y-10'>
      <section className='flex justify-between'>
        <h1 className=' text-4xl font-bold'>Artists</h1>
        <Modal title={'Register Artist'}>
          <ArtistForm artists={artists} />
        </Modal>
      </section>
      <section>
        {artists.artists.length === 0 && (
          <div className='flex items-center justify-center grow'>
            <p className=' font-semibold text-2xl text-red-700'>
              There are no artists
            </p>
          </div>
        )}
        <div className='flex space-x-10'>
          {artists.artists.map(artist => (
            <ArtistCard artist={artist} />
          ))}
        </div>
      </section>

      <div></div>
    </div>
  )
}

export default Artists
