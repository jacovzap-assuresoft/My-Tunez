import { Link } from 'react-router-dom'

import ArtistCard from './artist-card'
import { Artist } from '../../types'

interface ArtistGalleryProps {
  artists: Artist[]
}

const ArtistGallery = ({ artists }: ArtistGalleryProps) => {
  return (
    <section>
      {artists.length === 0 && (
        <div className='flex items-center justify-center grow'>
          <p className=' font-semibold text-2xl text-red-700'>
            There are no artists
          </p>
        </div>
      )}
      <div className='flex space-x-10'>
        {artists.map(artist => (
          <Link to={`/artists/${artist.id}/albums`} key={artist.id}>
            <ArtistCard artist={artist} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ArtistGallery
