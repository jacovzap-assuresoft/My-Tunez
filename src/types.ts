export interface Artist {
  name: string
  genres: string[]
  integrants: string[]
  website: string
  image: string
}

export interface Album {
  title: string
  genre: string
  releaseDate: Date
  potrait: string
  songs: string
}

export interface Song {
  title: string
  genre: string
  releaseDate: number
  artist: Artist
  album: Album
  duration: number
  resource: string
}
