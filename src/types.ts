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
  releaseDate: string
  cover: string
  artistId: string
  artistName: string
  songs: string[]
}

export interface Song {
  id?: string
  title: string
  genre: string
  releaseDate: string
  artistId: string
  artistName: string
  albumId: string
  albumTitle: string
  duration: number
  cover: string
  audio: string
}
