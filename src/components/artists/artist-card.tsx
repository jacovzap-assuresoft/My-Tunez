import { Artist } from '../../types'

interface ArtistCardProps {
  artist: Artist
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  return (
    <div>
      <section>
        <img src={artist.image} alt='' />
      </section>
      <section>
        <h1>{artist.name}</h1>
        {artist.genres.map(genre => (
          <p>{genre}</p>
        ))}
        {artist.integrants.map(integrant => (
          <p>{integrant}</p>
        ))}
        <p>{artist.website}</p>
      </section>
    </div>
  )
}

export default ArtistCard
