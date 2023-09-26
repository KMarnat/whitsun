import { Link } from 'react-router-dom';

export default function HeaderNav({ firstItem, secItem, className, modifier }) {
  return (
    <nav className={`nav ${className}`}>
      <ul className="nav__list">
        <li className={`item ${modifier}`}>
          <Link to={`/${firstItem}`}>{firstItem} </Link>
        </li>

        <li className="item">
          <Link to={`/${secItem}`}>{secItem}</Link>
        </li>
      </ul>
    </nav>
  );
}
