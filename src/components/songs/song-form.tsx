import TextFormControl from '../text-form-control'
import NumberFormControl from '../number-form-control'
import DateFormControl from '../date-form-control'
import SelectFormControl from '../select-form-control'
import Button from '../button'

import useSongs from '../../hooks/useSongs'

interface SongFormProps {
  songs: ReturnType<typeof useSongs>
}

const SongForm = ({ songs }: SongFormProps) => {
  return (
    <form className='flex flex-col gap-4' onSubmit={songs.handleCreateSong}>
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
      <Button label={'Save'} type={'submit'} isDisabled={!songs.isFormValid} />
    </form>
  )
}

export default SongForm
