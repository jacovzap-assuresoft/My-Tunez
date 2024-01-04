import { useEffect, useRef } from 'react'

import usePlayerStore from '../store/usePlayerStore'

const useMusicToolBar = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const { playingSong, isPlaying, setIsPlaying } = usePlayerStore()

  useEffect(() => {
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

  return {
    audioRef,
    playingSong,
    isPlaying,
    handleMainButton
  }
}

export default useMusicToolBar
