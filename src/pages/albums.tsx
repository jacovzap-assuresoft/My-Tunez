import Modal from '../components/modal'
import AlbumForm from '../components/albums/album-form'

import useAlbums from '../hooks/useAlbums'

const Albums = () => {
  const albums = useAlbums()

  return (
    <div className='grow flex flex-col px-7 py-11'>
      <section className='flex justify-between'>
        <h1 className=' text-4xl font-bold'>Albums</h1>
        <Modal title={'Register Album'}>
          <AlbumForm albums={albums} />
        </Modal>
      </section>
      {albums.albums.length === 0 && (
        <div className='flex items-center justify-center grow'>
          <p className=' font-semibold text-2xl text-red-700'>
            There are no albums
          </p>
        </div>
      )}
      {albums.albums.map(album => (
        <div key={album.title}>
          <div>{album.title}</div>
          <div>{album.genre}</div>
          <div>{album.artistId}</div>
          <div>{album.releaseDate.toString()}</div>
          <div>{album.potrait}</div>
        </div>
      ))}
      <div></div>
    </div>
  )
}

export default Albums
