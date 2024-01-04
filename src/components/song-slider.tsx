interface SongSliderProps {
  audioDuration: number
  setAudioCurrentTime: (audioCurrentTime: number) => void
  audioCurrentTime: number
}

const SongSlider = ({
  audioDuration,
  setAudioCurrentTime,
  audioCurrentTime
}: SongSliderProps) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`
  }

  return (
    <div className='space-x-3 relative'>
      <p className="absolute left-[-50px] top-[1px]">{formatTime(audioCurrentTime)}</p>
      <input
        onChange={event => setAudioCurrentTime(Number(event.target.value))}
        type='range'
        min='0'
        max={audioDuration}
        value={audioCurrentTime}
        className='min-w-[400px]'
      />
      <p className="absolute right-[-70px] top-[1px]">{formatTime(audioDuration)}</p>
    </div>
  )
}

export default SongSlider
