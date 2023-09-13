import { useState } from 'react';
import halfcirclegreen from '../assets/half-circle-green.png';
import artists from '../artists';

export default function SingleArtist() {
  const [artistName, setArtistName] = useState(decodeURI(window.location.pathname.split('/')[1]));

  const artist = artists.find((artist) => artist.name === artistName);

  return (
    <article className="artist">
      <div className="artist__name">
        <img src={halfcirclegreen} />
        <h2>{artistName}</h2>
      </div>
      <div className="artist__details">
        <div className="adaptive">
          <div className="adaptive-photo">
            <img src={artist.profileImg} alt="artist" />
          </div>
        </div>
        <div className="artist__about">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id turpis non ante
            pellentesque bibendum et in mi. Mauris id hendrerit tortor. Donec ut rhoncus justo.
            Integer eleifend maximus metus a tincidunt.
          </p>
          <p>
            Mauris interdum nisi id dolor finibus, ut molestie lacus tempor. Etiam ac lectus nec dui
            aliquet luctus id quis dui. Donec eget leo hendrerit, laoreet lectus viverra, convallis
            purus.
          </p>
          <p>
            Phasellus dui velit, congue sit amet pulvinar nec, porta et ante. Proin sodales mollis
            eros, sit amet malesuada enim pretium a. Nulla finibus ornare ligula sit amet faucibus.
            Donec porta accumsan dignissim.
          </p>
          <span className="background-circle"></span>
        </div>
      </div>
      <div className="artist__spotify">
        <h2>Spotify</h2>
        <h4>Top 10 melodier fra {artistName}</h4>
      </div>
    </article>
  );
}
