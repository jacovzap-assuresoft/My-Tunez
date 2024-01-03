import Modal from '../components/modal'
import AlbumForm from '../components/albums/album-form'
import AlbumGallery from '../components/albums/album-gallery'

import useAlbums from '../hooks/useAlbums'

const Albums = () => {
  const albums = useAlbums()

  return (
    <div className='grow flex flex-col px-7 py-11 space-y-10 overflow-y-auto'>
      <section className='flex justify-between'>
        <h1 className=' text-4xl font-bold'>Albums</h1>
        <Modal title={'Register Album'}>
          <AlbumForm albums={albums} />
        </Modal>
      </section>
      <AlbumGallery albums={albums.albums}/>
    </div>
  )
}

export default Albums
