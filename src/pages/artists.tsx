import ArtistForm from '../components/artists/artist-form'
import ArtistGallery from '../components/artists/artist-gallery'
import Modal from '../components/modal'

import useArtists from '../hooks/useArtists'

const Artists = () => {
  const artists = useArtists()

  return (
    <div className='grow flex flex-col px-7 py-11 space-y-10 mb-28'>
      <section className='flex justify-between'>
        <h1 className=' text-4xl font-bold'>Artists</h1>
        <Modal
          title={'Register Artist'}
          isOpen={artists.isModalOpen}
          setIsOpen={artists.setIsModalOpen}
        >
          <ArtistForm artists={artists} />
        </Modal>
      </section>
      <ArtistGallery artists={artists.artists} />
    </div>
  )
}

export default Artists
