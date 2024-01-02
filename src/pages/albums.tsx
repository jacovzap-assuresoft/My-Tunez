import TextFormControl from '../components/text-form-control'
import DateFormControl from '../components/date-form-control'

import Button from '../components/button'
import Modal from '../components/modal'

import useAlbums from '../hooks/useAlbums'

const Albums = () => {
  const albums = useAlbums()

  return (
    <div className='grow flex flex-col px-7 py-11'>
      <section className='flex justify-between'>
        <h1 className=' text-4xl font-bold'>Albums</h1>
        <Modal title={'Register Album'}>
          <form
            className='flex flex-col gap-4'
            onSubmit={albums.handleCreateAlbum}
          >
            <TextFormControl
              label={'Title'}
              isRequired
              value={albums.title}
              onInput={albums.setTitle}
            />
            <TextFormControl
              label={'Genre'}
              isRequired
              value={albums.genre}
              onInput={albums.setGender}
            />
            <DateFormControl
              label={'Release Year'}
              isRequired
              value={albums.releaseDate}
              onInput={albums.setReleaseDate}
            />
            <TextFormControl
              label={'Potrait'}
              isRequired
              value={albums.potrait}
              onInput={albums.setPotrait}
            />
            <TextFormControl
              label={'Songs'}
              isRequired
              value={albums.songs}
              onInput={albums.setSongs}
            />
           <Button label={'Save'} type={'submit'} isDisabled={!albums.isFormValid}/>
          </form>
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
          <div>{album.releaseDate.toString()}</div>
          <div>{album.potrait}</div>
          <div>{album.songs}</div>
        </div>
      ))}
      <div></div>
    </div>
  )
}

export default Albums
