import AlbumCard from "./album-card"

import { Album } from "../../types"

interface AlbumGalleryProps {
  albums: Album[]
}

const AlbumGallery = ({albums}: AlbumGalleryProps) => {
  return (
    <section>
      {albums.length === 0 && (
        <div className='flex items-center justify-center grow'>
          <p className=' font-semibold text-2xl text-red-700'>
            There are no albums
          </p>
        </div>
      )}
      <div className='flex space-x-10'>
        {albums.map(album => (
          <AlbumCard album={album} key={album.id} />
        ))}
      </div>
    </section>
  )
}

export default AlbumGallery
