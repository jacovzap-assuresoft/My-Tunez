export interface Gender {
  gender: string
}

export interface Integrant {
  name: string
}

export interface Artist {
  name: string
  genderList: Gender[]
  integrants: Integrant[]
  website: string
  image: string
}

export interface Album {
  title: string
  gender: Gender
  releaseYear: number
  image: string
  songs: Song[]
}

export interface Song {
  title: string
  gender: Gender
  releaseYear: number
  artist: Artist
  album: Album
  duration: number
  resource: string
}
