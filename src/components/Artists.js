import halfcirclegreen from '../assets/half-circle-green.png';
import artists from '../artists';
import { Link } from 'react-router-dom';

export default function Artists() {
  return (
    <section className="artists">
      <div className="artists-title">
        <img src={halfcirclegreen} className="artists-title__icon" alt="Title icon" />
        <h2 className="artists-title__name">
          <strong>ART</strong>ISTERNE
        </h2>
      </div>
      <div className="artists__grid">
        {artists.map((artist, i) => (
          <Link to={`/${artist.name}`} key={i}>
            <div className="artists__col">
              <div className="artists__grid-item">
                <img src={artist.imgOne} alt="artist" />
                <img src={artist.imgTwo} alt="artist" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
