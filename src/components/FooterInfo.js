import fb from "../assets/icons8-facebook.svg";
import instagram from "../assets/icons8-instagram.svg";

export default function FooterInfo() {
  return (
    <div className="info">
      <div className="info__socials">
        <p>
          <img src={fb} alt="socials icon" />
        </p>
        <p>
          <img src={instagram} alt="socials icon" />
        </p>
      </div>
      <nav className="info__nav">
        <ul className="info__list">
          <li className="item">
            <p>Foreninger</p>
          </li>
          <li className="item">
            <p>FAQ</p>
          </li>
          <li className="item">
            <p>Presse</p>
          </li>
          <li className="item">
            <p>Cookie</p>
          </li>
          <li className="item">
            <p>Privatliv</p>
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
