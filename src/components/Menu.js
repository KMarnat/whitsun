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
    <div className={`menu ${isActive ? 'menu--active' : ''}`}>
      <div className={`menu__background ${isActive ? 'menu__background--active' : ''}`}></div>
      <img
        src={backgroundtubes}
        className={`menu__illustration ${isActive ? 'menu__illustration--active' : ''}`}
        alt="background droplets"
      />

      <ul className={`list ${isActive ? 'list--active' : ''}`}>
        <li className="item">
          <Link to={'/billetter'} onClick={handleClick} className="item__link">
            <span className="item__icon">
              <img
                src={halfcircleleft}
                className="item__image item__image--left"
                alt="menu item icon"
              />
            </span>
            <span className="item__title">Billetter</span>
            <span className="item__drop"></span>
          </Link>
        </li>
        <li className="item">
          <Link to={'/artisterne'} onClick={handleClick} className="item__link">
            <span className="item__icon">
              <img src={circle} className="item__image circle" alt="menu item icon" />
            </span>
            <span className="item__title">Artisterne</span>
            <span className="item__drop"></span>
          </Link>
        </li>
        <li className="item">
          <Link to={'/mad&drikke'} onClick={handleClick} className="item__link">
            <span className="item__icon">
              <img
                src={halfcirclebottom}
                className="item__image item__image--bot"
                alt="menu item icon"
              />
            </span>
            <span className="item__title">Mad & Drikke</span>
            <span className="item__drop"></span>
          </Link>
        </li>
        <li className="item">
          <Link to={''} onClick={handleClick} className="item__link">
            <span className="item__icon">
              <img src={circledot} className="item__image" alt="menu item icon" />
            </span>
            <span className="item__title">Frivillige</span>
            <span className="item__drop"></span>
          </Link>
        </li>

        <li className="item">
          <Link to={'/info'} onClick={handleClick} className="item__link">
            <span className="item__icon">
              <img
                src="https://whitsun.dk/wp-content/uploads/2022/03/MenuIcon_info.png.webp"
                alt="menu item icon"
              />
            </span>
            <span className="item__title">Information</span>
            <span className="item__drop"></span>
          </Link>
        </li>
        <li className="item">
          <Link to={''} onClick={handleClick} className="item__link">
            <span className="item__icon">
              <img
                src="https://whitsun.dk/wp-content/uploads/2022/09/Om.png.webp"
                alt="menu item icon"
              />
            </span>
            <span className="item__title">Om Whitsun</span>
            <span className="item__drop"></span>
          </Link>
        </li>
      </ul>

      <button className={`menu__btn ${isActive ? 'menu__btn--active' : ''}`} onClick={handleClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </div>
  );
}
