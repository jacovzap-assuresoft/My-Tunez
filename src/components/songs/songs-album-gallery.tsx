import { IoPlay } from "react-icons/io5";
import { Song } from '../../types'

interface SongsAlbumGalleryProps {
  songs: Song[]
}

const SongsAlbumGallery = ({ songs }: SongsAlbumGalleryProps) => {
  return (
    <div>
      {songs.length === 0 && (
        <div className='flex items-center justify-center grow'>
          <p className=' font-semibold text-2xl text-red-700'>
            There are no songs
          </p>
        </div>
      )}
      {songs.map((song, index) => (
        <div
          key={song.id}
          className='flex justify-between group hover:cursor-pointer hover:bg-gray-200 px-7 py-3 items-center rounded-md transition'
        >
          <div className='flex space-x-10 items-center relative'>
            <p className=' text-gray-600 absolute left-0 group-hover:hidden block'>{index + 1}</p>
            <IoPlay className='w-4 h-4 text-gray-600 absolute left-[-43px] group-hover:block hidden' />
            <div>
              <p className='font-semibold text-gray-700'>{song.title}</p>
              <p className='text-gray-600 text-sm'>{song.artistName}</p>
            </div>
          </div>
          <p>{song.duration}</p>
        </div>
      ))}
    </div>
  )
}

export default SongsAlbumGallery
