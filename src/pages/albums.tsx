import Modal from '../components/modal'
import AlbumForm from '../components/albums/album-form'
import AlbumCard from '../components/albums/album-card'

import useAlbums from '../hooks/useAlbums'

const Albums = () => {
  const albums = useAlbums()

  return (
    <div className='grow flex flex-col px-7 py-11 space-y-10'>
      <section className='flex justify-between'>
        <h1 className=' text-4xl font-bold'>Albums</h1>
        <Modal title={'Register Album'}>
          <AlbumForm albums={albums} />
        </Modal>
      </section>
      <section>
        {albums.albums.length === 0 && (
          <div className='flex items-center justify-center grow'>
            <p className=' font-semibold text-2xl text-red-700'>
              There are no albums
            </p>
          </div>
        )}
        <div className='flex space-x-10'>
          {albums.albums.map(album => (
            <AlbumCard album={album} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Albums
