export interface Artist {
  name: string
  genders: string[]
  integrants: string[]
  website: string
  image: string
}

export interface Album {
  title: string
  gender: string
  releaseDate: Date
  potrait: string
  songs: string
}

export interface Song {
  title: string
  gender: string
  releaseDate: number
  artist: Artist
  album: Album
  duration: number
  resource: string
}
