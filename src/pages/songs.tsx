
import Modal from '../components/modal'
import SongForm from '../components/songs/song-form'

import useSongs from '../hooks/useSongs'

const Songs = () => {
  const songs = useSongs()

  return (
    <div className='grow flex flex-col px-7 py-11'>
      <section className='flex justify-between'>
        <h1 className=' text-4xl font-bold'>Songs</h1>
        <Modal title={'Register Song'}>
          <SongForm songs={songs}/>
        </Modal>
      </section>
      {songs.songs.length === 0 && (
        <div className='flex items-center justify-center grow'>
          <p className=' font-semibold text-2xl text-red-700'>
            There are no songs
          </p>
        </div>
      )}
      {songs.songs.map(album => (
        <div key={album.title}>
          <div>{album.title}</div>
          <div>{album.genre}</div>
          <div>{album.releaseDate.toString()}</div>
          <div>{album.artistId}</div>
          <div>{album.albumId}</div>
          <div>{album.duration}</div>
          <div>{album.audio}</div>
        </div>
      ))}
      <div></div>
    </div>
  )
}

export default Songs
