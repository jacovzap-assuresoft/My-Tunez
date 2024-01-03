
import { Song } from '../../types'

interface SongCardProps {
  song: Song
}

const SongCard = ({ song }: SongCardProps) => {
  return (
    <div
      className='w-[250px] bg-gray-50 rounded-lg space-y-1 hover:bg-white hover:cursor-pointer hover:scale-[1.01] transition'
    >
      <section>
        <img
          src={song.cover}
          alt=''
          className='w-full object-cover rounded-t-lg'
        />
      </section>
      <section className=' space-y-1 p-3'>
        <h1 className=' text-gray-700 font-semibold text-lg'>{song.title}</h1>
        <div className='text-gray-500'>
          <p>{song.albumTitle}</p>
        </div>
        <div className='flex space-x-2 text-gray-500'>
          <p>{song.artistName}</p>
          <span> • </span>
          <p>{song.releaseDate.split('-')[0]}</p>
        </div>
        <div></div>
      </section>
    </div>
  )
}

export default SongCard
