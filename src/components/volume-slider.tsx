interface VolumeSliderProps {
  volume: number
  setVolume: (volume: number) => void
}

const VolumeSlider = ({ volume, setVolume }: VolumeSliderProps) => {
  return (
    <div className='relative items-center space-x-4'>
      <p className='absolute left-[-25px] top-[2px]'>
        {(Number(volume) * 100).toFixed(0)}
      </p>
      <div className='-left-4'>
        <input
          min='0'
          max='100'
          onChange={event => setVolume(Number(event.target.value) / 100)}
          type='range'
          value={volume * 100}
          className='
          w-20
        '
        />
      </div>
    </div>
  )
}

export default VolumeSlider
