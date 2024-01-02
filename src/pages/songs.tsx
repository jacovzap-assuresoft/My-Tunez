import Modal from '../components/modal'
import SongForm from '../components/songs/song-form'
import SongCard from '../components/songs/song-card'

import useSongs from '../hooks/useSongs'

const Songs = () => {
  const songs = useSongs()

  return (
    <div className='grow flex flex-col px-7 py-11 space-y-10'>
      <section className='flex justify-between'>
        <h1 className=' text-4xl font-bold'>Songs</h1>
        <Modal title={'Register Song'}>
          <SongForm songs={songs} />
        </Modal>
      </section>
      <section>
        {songs.songs.length === 0 && (
          <div className='flex items-center justify-center grow'>
            <p className=' font-semibold text-2xl text-red-700'>
              There are no songs
            </p>
          </div>
        )}
        <div className='flex space-x-10'>
        {songs.songs.map(song => (
          <SongCard song={song} />
        ))}
        </div>
      </section>
    </div>
  )
}

export default Songs
