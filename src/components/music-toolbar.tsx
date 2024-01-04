import {
  IoPlay,
  IoPause,
  IoShuffle,
  IoRepeat,
  IoPlaySkipBack,
  IoPlaySkipForward
} from 'react-icons/io5'

import useMusicToolBar from '../hooks/useMusicToolBar'

const MusicToolbar = () => {
  const player = useMusicToolBar()

  return (
    <aside className='fixed bottom-0  w-full '>
      {player.playingSong && (
        <div className='bg-white m-5 h-28 rounded-xl flex justify-between p-5 relative shadow-sm'>
          <section className='flex space-x-3 '>
            <img className='rounded-lg' src={player.playingSong.cover} alt='' />
            <div className='flex justify-center space-y-1 flex-col left-16 '>
              <h2 className='font-semibold text-gray-700 text-lg '>
                {player.playingSong.title}
              </h2>
              <p className='text-gray-600'>{player.playingSong.artistName}</p>
            </div>
          </section>
          <section className='absolute flex top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <div className='flex flex-col space-y-2'>
              <div className='flex space-x-5 items-center'>
                <div className='hover:cursor-pointer hover:bg-gray-200 transition p-2 rounded-full'>
                  <IoShuffle className='w-5 h-5' />
                </div>
                <div className='hover:cursor-pointer hover:bg-gray-200 transition p-2 rounded-full'>
                  <IoPlaySkipBack className='w-5 h-5' />
                </div>
                <div className='p-3 bg-red-700 rounded-full cursor-pointer hover:opacity-80' onClick={player.handleMainButton}>
                  {!player.isPlaying ? (
                      <IoPlay className='text-white w-5 h-5' />
                  ) : (
                    <IoPause className='text-white w-5 h-5' />
                  )}
                </div>
                <div className='hover:cursor-pointer hover:bg-gray-200 transition p-2 rounded-full'>
                  <IoPlaySkipForward className='w-5 h-5' />
                </div>
                <div className='hover:cursor-pointer hover:bg-gray-200 transition p-2 rounded-full'>
                  <IoRepeat className='w-5 h-5' />
                </div>
              </div>
              <input type='range' className='text-red-700' />
            </div>
          </section>
          <section className='flex items-center'>
            <input type='range' />
          </section>
          <audio ref={player.audioRef} controls></audio>
        </div>
      )}
    </aside>
  )
}

export default MusicToolbar
