import HeaderNav from './HeaderNav.js';
import Logo from '../assets/whitsunLogo.webp';
import ticketgreen from '../assets/ticket-green.png';
import { Link } from 'react-router-dom';
import Menu from './Menu.js';

export default function Header() {
  return (
    <>
      <div className="header">
        <HeaderNav
          firstItem="billetter"
          secItem="artisterne"
          className="nav--primary"
          modifier="item--bg"
        />
        <Link to={'/'}>
          <img src={Logo} alt="logo" />
        </Link>
        <HeaderNav
          firstItem="spotify"
          secItem="search"
          className="nav--secondary"
          modifier="item--bold"
        />
        <button className="header__tickets">
          <img src={ticketgreen} alt="header tickets" />
        </button>
      </div>
      <Menu />
    </>
  );
}
