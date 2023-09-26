import fb from '../assets/icons8-facebook.svg';
import instagram from '../assets/icons8-instagram.svg';

export default function FooterInfo() {
  return (
    <div className="info">
      <div className="info__socials">
        <a href="#">
          <img src={fb} alt="socials icon" />
        </a>
        <a href="#">
          <img src={instagram} alt="socials icon" />
        </a>
      </div>
      <nav>
        <ul className="info__list">
          <li>
            <a href="#">Foreninger</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Presse</a>
          </li>
          <li>
            <a href="#">Cookie</a>
          </li>
          <li>
            <a href="#">Privatliv</a>
          </li>
        </ul>
      </nav>
      <div className="info__address">
        <p>whitsun festival lolland</p>
        <p>kristjanssædevej 3, 4930 maribo</p>
        <p>info@whitsun.dk</p>
      </div>
    </div>
  );
}
