import HeaderNav from './HeaderNav.js';
import Logo from '../assets/whitsunLogo.webp';

export default function Header() {
  return (
    <div className="header">
      <HeaderNav firstItem="billetter" secItem="program" className="nav-main" />
      <a>
        <img src={Logo} />
      </a>
      <HeaderNav firstItem="spotify" secItem="search" className="nav-secondary" />
    </div>
  );
}
