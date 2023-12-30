import TextFormControl from '../components/text-form-control'
import ListFormControl from '../components/list-form-control'
import Button from '../components/button'

import Modal from '../components/modal'

import useArtists from '../hooks/useArtists'

const Artists = () => {
  const artists = useArtists()

  return (
    <div className='grow flex flex-col px-7 py-11'>
      <section className='flex justify-between'>
        <h1 className=' text-4xl font-bold'>Artists</h1>
        <Modal title={'Register Artist'}>
          <form
            className='flex flex-col gap-4'
            onSubmit={artists.handleCreateArtist}
          >
            <TextFormControl
              label={'Name'}
              isRequired
              value={artists.name}
              onInput={artists.setName}
            />
            <ListFormControl
              label={'Genders'}
              isRequired
              value={artists.gender}
              list={artists.genders}
              onInput={artists.setGender}
              onAdd={artists.handleAddGender}
              onRemove={artists.handleRemoveGender}
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
            <Button label={'Save'} type={'submit'}/>
          </form>
        </Modal>
      </section>
      {artists.artists.length === 0 && (
        <div className='flex items-center justify-center grow'>
          <p className=' font-semibold text-2xl text-red-700'>
            There are no artists
          </p>
        </div>
      )}
      {artists.artists.map(artist => (
        <div key={artist.name}>
          <div>{artist.name}</div>
          <div>{artist.genders[0]}</div>
          <div>{artist.integrants[0]}</div>
          <div>{artist.website}</div>
          <div>{artist.image}</div>
        </div>
      ))}
      <div></div>
    </div>
  )
}

export default Artists
