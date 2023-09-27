import artists from '../artists';
import { Link } from 'react-router-dom';

export default function Artists() {
  return (
    <section className="artists">
      <div className="artists__title">
        <h1 className="artists__name">
          <strong>ART</strong>ISTERNE
        </h1>
      </div>
      <div className="artists__grid">
        {artists.map((artist, i) => (
          <Link to={`/${artist.name}`} key={i}>
            <div className={`single-artist ${artist.modified ? 'single-artist--inverse' : ''}`}>
              <img
                src={artist.imgOne}
                alt="artist"
                className={artist.imgOne.includes('illustration') && 'single-artist__illustration'}
              />
              <img
                src={artist.imgTwo}
                alt="artist"
                className={artist.imgTwo.includes('illustration') && 'single-artist__illustration'}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
