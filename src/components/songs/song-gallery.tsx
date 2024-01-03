import SongCard from "./song-card"
import { Song } from "../../types"

interface SongGalleryProps {
  songs: Song[]
}

const SongGallery = ({songs}: SongGalleryProps) => {
  return (
    <section>
    {songs.length === 0 && (
      <div className='flex items-center justify-center grow'>
        <p className=' font-semibold text-2xl text-red-700'>
          There are no songs
        </p>
      </div>
    )}
    <div className='flex space-x-6'>
    {songs.map(song => (
      <SongCard song={song} key={song.id}/>
    ))}
    </div>
  </section>
  )
}

export default SongGallery