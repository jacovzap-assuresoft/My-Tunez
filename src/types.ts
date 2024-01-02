export interface Artist {
  id?: string
  name: string
  genres: string[]
  integrants: string[]
  website: string
  image: string
}

export interface Album {
  id?: string
  title: string
  genre: string
  releaseDate: Date
  potrait: string
  songs: string[]
}

export interface Song {
  id?: string
  title: string
  genre: string
  releaseDate: Date
  artistId: string
  albumId: string
  duration: number
  audio: string
}
