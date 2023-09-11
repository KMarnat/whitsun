export default function HeaderNav({ firstItem, secItem, className }) {
  return (
    <nav className="nav">
      <ul className={`nav-list ${className}`}>
        <li className="item">
          <a href="#">{firstItem}</a>
        </li>
        <li className="item">
          <a href="#">{secItem}</a>
        </li>
      </ul>
    </nav>
  );
}
