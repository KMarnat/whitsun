import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from './HeaderNav.js';
import Logo from '../assets/whitsunLogo.webp';
import ticketgreen from '../assets/ticket-green.png';
import Menu from './Menu.js';

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    isActive && setIsActive(!isActive);
  }

  return (
    <>
      <div className="header">
        <HeaderNav
          firstItem="billetter"
          secItem="artisterne"
          className="nav--primary"
          modifier="nav__item--bg"
          onClick={handleClick}
        />
        <Link to={'/'} onClick={handleClick}>
          <img src={Logo} alt="logo" />
        </Link>
        <HeaderNav
          firstItem="spotify"
          secItem="search"
          className="nav--secondary"
          modifier="nav__item--bold"
          onClick={handleClick}
        />
        <button className="header__tickets">
          <img src={ticketgreen} alt="header tickets" />
        </button>
      </div>
      <Menu isActive={isActive} setIsActive={setIsActive} />
    </>
  );
}
