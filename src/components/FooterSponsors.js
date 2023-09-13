import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import sponsors from '../sponsors.js';

export default function FooterSponsors() {
  const [settings] = useState({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });

  return (
    <div className="sponsors">
      <h4 className="sponsors__title">
        VI HAR DE <strong>BEDSTE</strong> SAMARBEJDSPARTNERE
      </h4>
      <div className="sponsors__slider">
        <Slider {...settings}>
          {sponsors.map((logo, index) => (
            <div key={index} className="sponsors-logo">
              <img src={logo} alt="sponsor logo" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
