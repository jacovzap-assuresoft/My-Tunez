import TextFormControl from '../text-form-control'
import ListFormControl from '../list-form-control'
import Button from '../button'

import useArtists from '../../hooks/useArtists'

interface ArtistFormProps {
  artists: ReturnType<typeof useArtists>
}

const ArtistForm = ({ artists }: ArtistFormProps) => {
  return (
    <form className='flex flex-col gap-4' onSubmit={artists.handleCreateArtist}>
      <TextFormControl
        label={'Name'}
        isRequired
        value={artists.name}
        onInput={artists.setName}
      />
      <ListFormControl
        label={'Genres'}
        isRequired
        value={artists.genre}
        list={artists.genres}
        onInput={artists.setGenre}
        onAdd={artists.handleAddGenre}
        onRemove={artists.handleRemoveGenre}
      />
      <ListFormControl
        label={'Integrants'}
        isRequired
        value={artists.integrant}
        list={artists.integrants}
        onInput={artists.setIntegrant}
        onAdd={artists.handleAddIntegrant}
        onRemove={artists.handleRemoveIntegrant}
      />
      <TextFormControl
        label={'Website'}
        isRequired
        value={artists.website}
        onInput={artists.setWebsite}
      />
      <TextFormControl
        label={'Image'}
        isRequired
        value={artists.image}
        onInput={artists.setImage}
      />
      <Button
        label={'Save'}
        type={'submit'}
        isDisabled={!artists.isFormValid}
      />
    </form>
  )
}

export default ArtistForm
