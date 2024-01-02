import { Album } from '../../types'

interface AlbumCardProps {
  album: Album
}

const AlbumCard = ({ album }: AlbumCardProps) => {
  return (
    <div key={album.id} className='w-[250px] bg-gray-50 rounded-lg space-y-1 hover:bg-white hover:cursor-pointer hover:scale-[1.01] transition'>
      <section>
        <img src={album.potrait} alt='' className='w-full object-cover rounded-t-lg' />
      </section>
      <section className=' space-y-1 p-3'>
        <h1 className=' text-gray-700 font-semibold text-lg'>{album.title}</h1>
        <div className='flex space-x-2 text-gray-500'>
          <p>{album.artistName}</p>
          <span> • </span>
          <p>{album.releaseDate.split('-')[0]}</p>
        </div>
      </section>
    </div>
  )
}

export default AlbumCard
