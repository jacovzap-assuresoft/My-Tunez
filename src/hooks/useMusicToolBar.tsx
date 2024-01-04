import { useState, useEffect, useRef } from 'react'

import usePlayerStore from '../store/usePlayerStore'
import { Song } from '../types'

const useMusicToolBar = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [audioDuration, setAudioDuration] = useState(0)
  const [audioCurrentTime, setAudioCurrentTime] = useState(0)
  const [audioVolume, setAudioVolume] = useState(1)
  const [playerQueue, setPlayerQueue] = useState<Song[]>([])
  const {
    playingSong,
    setPlayingSong,
    isPlaying,
    setIsPlaying,
    queue,
    setShuffledQueue,
    isShuffle,
    setIsShuffle,
    isRepeat,
    setIsRepeat
  } = usePlayerStore()

  useEffect(() => {
    if (isShuffle) {
      const shuffledQueue = [...queue].sort(() => Math.random() - 0.5)
      setShuffledQueue(shuffledQueue)
      setPlayerQueue(shuffledQueue)
    } else {
      setPlayerQueue(queue)
    }
  }, [queue, isShuffle, setShuffledQueue])

  useEffect(() => {
    audioRef.current!.addEventListener('loadedmetadata', () => {
      setAudioDuration(audioRef.current!.duration)
    })
    audioRef.current!.addEventListener('timeupdate', () => {
      setAudioCurrentTime(audioRef.current!.currentTime)
    })
    audioRef.current!.addEventListener('ended', () => {
      handleClickNextSong()
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

  const handleClickNextSong = () => {
    const currentSongIndex = playerQueue.findIndex(
      song => song.id === playingSong!.id
    )
    const nextSong = playerQueue[currentSongIndex + 1]

    if (nextSong) {
      setPlayingSong(nextSong)
    } else if(isRepeat) {
      setPlayingSong(playerQueue[0])
    }
  }

  const handleClickPreviousSong = () => {
    const currentSongIndex = playerQueue.findIndex(
      song => song.id === playingSong!.id
    )

    if (audioCurrentTime > 10) {
      setAudioCurrentTime(0)
      audioRef.current!.currentTime = 0
      return
    }

    const previousSong = playerQueue[currentSongIndex - 1]

    if (previousSong) {
      setPlayingSong(previousSong)
    } else if(isRepeat) {
      setPlayingSong(playerQueue[playerQueue.length - 1])
    }
  }

  return {
    audioRef,
    playingSong,
    isPlaying,
    handleMainButton,
    isShuffle,
    setIsShuffle,
    isRepeat,
    setIsRepeat,

    audioVolume,
    audioDuration,
    audioCurrentTime,
    setAudioVolume,
    setAudioCurrentTime,
    handleSetCurrentTime,
    handleClickNextSong,
    handleClickPreviousSong
  }
}

export default useMusicToolBar
