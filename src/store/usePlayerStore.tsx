import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Song } from '../types'

interface PlayerStore {
  playingSong: Song | null
  queue: Song[]
  setQueue: (queue: Song[]) => void
  isPlaying: boolean
  setIsPlaying: (isPlaying: boolean) => void
  isRepeat: boolean
  setIsRepeat: (isRepeat: boolean) => void
  isShuffle: boolean
  shuffledQueue: Song[]
  setShuffledQueue: (shuffledQueue: Song[]) => void
  setIsShuffle: (isShuffle: boolean) => void
  setPlayingSong: (song: Song) => void
}

const usePlayerStore = create<PlayerStore>()(
    persist(
        (set) => ({
            playingSong: null,
            queue: [],
            setQueue: (queue: Song[]) => set({ queue }),
            isPlaying: false,
            setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
            isRepeat: false,
            setIsRepeat: (isRepeat: boolean) => set({ isRepeat }),
            isShuffle: false,
            shuffledQueue: [],
            setShuffledQueue: (shuffledQueue: Song[]) => set({ shuffledQueue }),
            setIsShuffle: (isShuffle: boolean) => set({ isShuffle }),
            setPlayingSong: (song: Song) => set({ playingSong: song })
        }),
        {
          name: 'player'
        }
      )
    )

export default usePlayerStore



