import Modal from '../components/modal'
import SongForm from '../components/songs/song-form'
import SongGallery from '../components/songs/song-gallery'

import useSongs from '../hooks/useSongs'

const Songs = () => {
  const songs = useSongs()

  return (
    <div className='grow flex flex-col px-7 py-11 space-y-10 '>
      <section className='flex justify-between'>
        <h1 className=' text-4xl font-bold'>Songs</h1>
        <Modal title={'Register Song'}>
          <SongForm songs={songs} />
        </Modal>
      </section>
     <SongGallery songs={songs.songs}/>
    </div>
  )
}

export default Songs
