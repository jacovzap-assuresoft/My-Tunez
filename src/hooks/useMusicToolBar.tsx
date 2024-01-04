import { useState, useEffect, useRef } from 'react'

import usePlayerStore from '../store/usePlayerStore'

const useMusicToolBar = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [audioDuration, setAudioDuration] = useState(0)
  const [audioCurrentTime, setAudioCurrentTime] = useState(0)
  const [audioVolume, setAudioVolume] = useState(1)
  const { playingSong, isPlaying, setIsPlaying } = usePlayerStore()

  useEffect(() => {
    audioRef.current!.addEventListener('loadedmetadata', () => {
      setAudioDuration(audioRef.current!.duration)
    })
    audioRef.current!.addEventListener('timeupdate', () => {
      setAudioCurrentTime(audioRef.current!.currentTime)
    })
  }, [])

  useEffect(() => {
    audioRef.current!.volume = audioVolume
  }, [audioVolume])

  useEffect(() => {
    if (!playingSong) return
    audioRef.current!.src = playingSong!.audio
    audioRef.current!.play()
  }, [playingSong])

  useEffect(() => {
    if (isPlaying) {
      audioRef.current!.play()
    } else {
      audioRef.current!.pause()
    }
  }, [isPlaying])

  const handleMainButton = () => {
    if (isPlaying) {
      setIsPlaying(false)
    } else {
      setIsPlaying(true)
    }
  }

  const handleSetCurrentTime = (time: number) => {
    setAudioCurrentTime(time)
    audioRef.current!.currentTime = time
  }

  return {
    audioRef,
    playingSong,
    isPlaying,
    handleMainButton,

    audioVolume,
    audioDuration,
    audioCurrentTime,
    setAudioVolume,
    setAudioCurrentTime,
    handleSetCurrentTime
  }
}

export default useMusicToolBar
