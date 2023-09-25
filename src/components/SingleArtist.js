import { useState } from 'react';
import halfcirclegreen from '../assets/half-circle-green.png';
import artists from '../artists';
import spotifylogo from '../assets/spotify-logo.svg';

export default function SingleArtist() {
  const [artistName, setArtistName] = useState(decodeURI(window.location.pathname.split('/')[1]));

  const artist = artists.find((artist) => artist.name === artistName);

  return (
    <article className="artist">
      <div className="artist__name">
        <img src={halfcirclegreen} alt="title icon" />
        <h2>{artistName}</h2>
      </div>
      <div className="artist__details">
        <div className="image">
          <img src={artist.profileImg} alt="artist" className="image__artist" />
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
          <span className="background-circle--dark"></span>
        </div>
        <div className="artist__spotify-logo">
          <img src={spotifylogo} alt="spotify" />
          <h2>Spotify</h2>
        </div>
        <div className="artist__spotify-top">
          <h4>Top 10 melodier fra {artistName}</h4>
        </div>
      </div>
      <div className="food">
        <h2 className="food__title">Gå ikke glip af</h2>
        <div className="food__list">
          <div className="food__item">
            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/210826215046-hotdog-stock.jpg?q=w_3000,h_2000,x_0,y_0,c_fill"
              alt="food"
            />
          </div>

          <div className="food__item">
            <img
              src="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe-500x500.jpg"
              alt="food"
            />
          </div>

          <div className="food__item">
            <img
              src="https://i.pinimg.com/550x/42/57/57/425757bec893d00c54b07adbc5100833.jpg"
              alt="food"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
