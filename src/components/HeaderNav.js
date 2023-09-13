import { Link } from 'react-router-dom';

export default function HeaderNav({ firstItem, secItem, className, modifier }) {
  return (
    <nav className="nav">
      <ul className={`nav-list ${className}`}>
        <Link to={`/${firstItem}`}>
          <li className={`item ${modifier}`}>{firstItem}</li>
        </Link>
        <Link to={`/${secItem}`}>
          <li className="item">{secItem}</li>
        </Link>
      </ul>
    </nav>
  );
}
