import { useState } from 'react';
import halfcircleleft from '../assets/half-circle-left.png';
import circle from '../assets/circle.png';
import halfcirclebottom from '../assets/half-circle-bottom.png';
import circledot from '../assets/circle-dot.png';
import backgroundtubes from '../assets/backgroundtubes.svg';
import { Link } from 'react-router-dom';

export default function MenuButton() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((isActive) => !isActive);
  };

  return (
    <div className="menu">
      <div className={`menu__background ${isActive ? 'menu__background--active' : ''}`}></div>
      <img
        src={backgroundtubes}
        className={`menu__illustration ${isActive ? 'menu__illustration--active' : ''}`}
        alt="background droplets"
      />

      <ul className={`menu-list ${isActive ? 'menu-list--active' : ''}`}>
        <Link to={'/billetter'} onClick={handleClick}>
          <li className="item">
            <span className="item__icon">
              <img src={halfcircleleft} className="image half-circle-left" />
            </span>
            <span className="item__title">Billetter</span>
            <span className="item__drop"></span>
          </li>
        </Link>
        <Link to={'/artisterne'} onClick={handleClick}>
          <li className="item">
            <span className="item__icon">
              <img src={circle} className="image circle" />
            </span>
            <span className="item__title">Artisterne</span>
            <span className="item__drop"></span>
          </li>
        </Link>
        <Link to={'/mad&drikke'} onClick={handleClick}>
          <li className="item">
            <span className="item__icon">
              <img src={halfcirclebottom} className="image half-circle-bot" />
            </span>
            <span className="item__title">Mad & Drikke</span>
            <span className="item__drop"></span>
          </li>
        </Link>
        <li className="item">
          <span className="item__icon">
            <img src={circledot} className="image" />
          </span>
          <span className="item__title">Frivillige</span>
          <span className="item__drop"></span>
        </li>
        <Link to={'/info'} onClick={handleClick}>
          <li className="item">
            <span className="item__icon">
              <img src="https://whitsun.dk/wp-content/uploads/2022/03/MenuIcon_info.png.webp" />
            </span>
            <span className="item__title">Information</span>
            <span className="item__drop"></span>
          </li>
        </Link>
        <li className="item">
          <span className="item__icon">
            <img src="https://whitsun.dk/wp-content/uploads/2022/09/Om.png.webp" />
          </span>
          <span className="item__title">Om Whitsun</span>
          <span className="item__drop"></span>
        </li>
      </ul>

      <button className={`menu-btn ${isActive ? 'menu-btn--active' : ''}`} onClick={handleClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </div>
  );
}
