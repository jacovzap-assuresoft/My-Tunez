import AlbumCard from './album-card'

import { Album } from '../../types'
import { Link } from 'react-router-dom'

interface AlbumGalleryProps {
  albums: Album[]
}

const AlbumGallery = ({ albums }: AlbumGalleryProps) => {
  return (
    <section>
      {albums.length === 0 && (
        <div className='flex items-center justify-center grow'>
          <p className=' font-semibold text-2xl text-red-700'>
            There are no albums
          </p>
        </div>
      )}
      <div className='flex gap-x-5 flex-wrap gap-y-5'>
        {albums.map(album => (
          <Link key={album.id} to={`/albums/${album.id}/songs`}>
            <AlbumCard album={album} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default AlbumGallery
