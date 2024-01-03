import SongsAlbumGallery from '../components/songs/songs-album-gallery'
import useAlbumSongs from '../hooks/useAlbumSongs'

const AlbumSongs = () => {
  const { album, songs } = useAlbumSongs()

  return (
    <div className='grow flex flex-col px-7 py-11 space-y-10'>
      <section className='flex space-x-10 items-center'>
        <img src={album?.cover} alt='' className='w-[210px] rounded-lg' />
        <div className='space-y-2'>
          <h1 className=' text-6xl font-bold text-gray-700'>{album?.title}</h1>
          <p className=' text-gray-600 text-lg'>{album?.artistName}</p>
          <div className='flex space-x-2 text-gray-600 text-md'>
            <p>{album?.genre}</p>
            <span>•</span>
            <p>{album?.releaseDate.split('-')[0]}</p>
          </div>
        </div>
      </section>
      <hr />
      <section className='space-y-2'>
        <SongsAlbumGallery songs={songs} />
      </section>
    </div>
  )
}

export default AlbumSongs
