import ArtistForm from '../components/artists/artist-form'
import Modal from '../components/modal'

import useArtists from '../hooks/useArtists'

const Artists = () => {
  const artists = useArtists()

  return (
    <div className='grow flex flex-col px-7 py-11'>
      <section className='flex justify-between'>
        <h1 className=' text-4xl font-bold'>Artists</h1>
        <Modal title={'Register Artist'}>
          <ArtistForm artists={artists}/>
        </Modal>
      </section>
      {artists.artists.length === 0 && (
        <div className='flex items-center justify-center grow'>
          <p className=' font-semibold text-2xl text-red-700'>
            There are no artists
          </p>
        </div>
      )}
      {artists.artists.map(artist => (
        <div key={artist.name}>
          <div>{artist.name}</div>
          <div>{artist.genres[0]}</div>
          <div>{artist.integrants[0]}</div>
          <div>{artist.website}</div>
          <div>{artist.image}</div>
        </div>
      ))}
      <div></div>
    </div>
  )
}

export default Artists
