import TextFormControl from '../components/text-form-control'
import NumberFormControl from '../components/number-form-control'
import DateFormControl from '../components/date-form-control'
import SelectFormControl from '../components/select-form-control'

import Button from '../components/button'
import Modal from '../components/modal'

import useSongs from '../hooks/useSongs'

const Songs = () => {
  const songs = useSongs()

  return (
    <div className='grow flex flex-col px-7 py-11'>
      <section className='flex justify-between'>
        <h1 className=' text-4xl font-bold'>Songs</h1>
        <Modal title={'Register Song'}>
          <form
            className='flex flex-col gap-4'
            onSubmit={songs.handleCreateSong}
          >
            <TextFormControl
              label={'Title'}
              isRequired
              value={songs.title}
              onInput={songs.setTitle}
            />
            <TextFormControl
              label={'Genre'}
              isRequired
              value={songs.genre}
              onInput={songs.setGenre}
            />
            <DateFormControl
              label={'Release Year'}
              isRequired
              value={songs.releaseDate}
              onInput={songs.setReleaseDate}
            />
            <SelectFormControl
              label={'Artist'}
              isRequired
              value={songs.artistId}
              onSelect={songs.setArtistId}
              options={songs.artists}
            />
            <SelectFormControl
              label={'Album'}
              isRequired
              value={songs.albumId}
              onSelect={songs.setAlbumId}
              options={songs.albums}
            />
            <NumberFormControl
              label={'Duration'}
              isRequired
              value={songs.duration}
              onInput={songs.setDuration}
            />
            <TextFormControl
              label={'Audio'}
              isRequired
              value={songs.audio}
              onInput={songs.setAudio}
            />
           <Button label={'Save'} type={'submit'} isDisabled={!songs.isFormValid}/>
          </form>
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
