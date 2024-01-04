import { IoPlay, IoPause } from 'react-icons/io5'
import { Song } from '../../types'

import usePlayerStore from '../../store/usePlayerStore'

interface SongCardProps {
  song: Song
  songs: Song[]
}

const SongCard = ({ song, songs }: SongCardProps) => {
  const { playingSong, setPlayingSong, isPlaying, setIsPlaying, setQueue } = usePlayerStore()

  const handleClick = () => {
    setQueue(songs)
    setPlayingSong(song)

    if(song.id === playingSong?.id) setIsPlaying(!isPlaying)
    else setIsPlaying(true)
  }

  return (
    <div
      onClick={handleClick}
      className='group relative w-[235px] bg-gray-50 rounded-lg space-y-1 hover:bg-white hover:cursor-pointer transition'
    >
      <section>
        <img
          src={song.cover}
          alt=''
          className='w-full object-cover rounded-t-lg'
        />
      </section>
      <section className='space-y-1 p-3'>
        <h1 className=' text-gray-700 font-semibold text-lg'>{song.title}</h1>
        <div className='text-gray-500'>
          <p>{song.albumTitle}</p>
        </div>
        <div className='flex space-x-2 text-gray-500'>
          <p>{song.artistName}</p>
          <span> • </span>
          <p>{song.releaseDate.split('-')[0]}</p>
        </div>
        <div
          className='absolute bg-red-700 p-3 rounded-full right-4 top-[185px]
              group-hover:opacity-100 opacity-0 transition group-hover:translate-y-[-10px]'
        >
          {(playingSong?.id === song.id && isPlaying) ? (
            <IoPause className='w-5 h-5 text-white' />
          ) : (
            <IoPlay className='w-5 h-5 text-white' />
          )}
        </div>
      </section>
    </div>
  )
}

export default SongCard
