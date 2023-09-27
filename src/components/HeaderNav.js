import { Link } from 'react-router-dom';

export default function HeaderNav({ firstItem, secItem, className, modifier, onClick }) {
  return (
    <nav className={`nav ${className}`}>
      <ul className="nav__list">
        <li className={`nav__item ${modifier}`}>
          <Link to={`/${firstItem}`} onClick={onClick}>
            {firstItem}
          </Link>
        </li>

        <li className="nav__item">
          <Link to={`/${secItem}`} onClick={onClick}>
            {secItem}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
