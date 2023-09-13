import HeaderNav from './HeaderNav.js';
import Logo from '../assets/whitsunLogo.webp';
import { Link } from 'react-router-dom';
import MenuButton from './Menu.js';

export default function Header() {
  return (
    <>
      <div className="header">
        <HeaderNav
          firstItem="billetter"
          secItem="artisterne"
          className="nav-main"
          modifier="item--bg"
        />
        <Link to={'/'}>
          <img src={Logo} />
        </Link>
        <HeaderNav
          firstItem="spotify"
          secItem="search"
          className="nav-secondary"
          modifier="item--bold"
        />
      </div>
      <MenuButton />
    </>
  );
}
