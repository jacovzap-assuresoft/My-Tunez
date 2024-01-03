import { Artist } from '../../types'

interface ArtistCardProps {
  artist: Artist
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  return (
    <div className=' bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-sm space-y-3 hover:bg-white hover:scale-[1.01] transition hover:cursor-pointer'>
      <section className='flex justify-center'>
        <img src={artist.image} alt='' className='rounded-full w-[150px]' />
      </section>
      <section>
        <h1 className='text-center font-semibold text-gray-500 text-lg'>
          {artist.name}
        </h1>
      </section>
    </div>
  )
}

export default ArtistCard
