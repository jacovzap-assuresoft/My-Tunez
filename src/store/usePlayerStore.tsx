import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Song } from '../types'

interface PlayerStore {
  playingSong: Song | null
  queue: Song[]
  isPlaying: boolean
  setIsPlaying: (isPlaying: boolean) => void
  isRepeat: boolean
  isShuffle: boolean
  setPlayingSong: (song: Song) => void
}

const usePlayerStore = create<PlayerStore>()(
    persist(
        (set, get) => ({
            playingSong: null,
            queue: [],
            isPlaying: false,
            setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
            isRepeat: false,
            isShuffle: false,
            setPlayingSong: (song: Song) => set({ playingSong: song })
        }),
        {
          name: 'player'
        }
      )
    )

export default usePlayerStore



