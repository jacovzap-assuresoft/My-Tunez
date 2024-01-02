import TextFormControl from '../text-form-control'
import DateFormControl from '../date-form-control'
import SelectFormControl from '../select-form-control'
import Button from '../button'

import useAlbums from '../../hooks/useAlbums'

interface AlbumFormProps {
  albums: ReturnType<typeof useAlbums>
}

const AlbumForm = ({ albums }: AlbumFormProps) => {
  return (
    <form className='flex flex-col gap-4' onSubmit={albums.handleCreateAlbum}>
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
        onInput={albums.setGenre}
      />
      <DateFormControl
        label={'Release Year'}
        isRequired
        value={albums.releaseDate}
        onInput={albums.setReleaseDate}
      />
      <SelectFormControl
        label={'Artist'}
        isRequired
        value={albums.artistId}
        onSelect={albums.setArtistId}
        options={albums.artists}
      />
      <TextFormControl
        label={'Potrait'}
        isRequired
        value={albums.potrait}
        onInput={albums.setPotrait}
      />
      <Button label={'Save'} type={'submit'} isDisabled={!albums.isFormValid} />
    </form>
  )
}

export default AlbumForm
