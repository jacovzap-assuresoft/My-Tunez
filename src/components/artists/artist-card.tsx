import { Artist } from '../../types'

interface ArtistCardProps {
  artist: Artist
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  return (
    <div className='rounded-lg p-4 border-gray-200 space-y-3 hover:scale-[1.02] transition hover:cursor-pointer'>
      <section className='flex justify-center'>
        <img src={artist.image} alt='' className='rounded-full w-[150px]' />
      </section>
      <section>
        <h1 className='text-center font-semibold text-gray-700 text-lg'>
          {artist.name}
        </h1>
      </section>
    </div>
  )
}

export default ArtistCard
