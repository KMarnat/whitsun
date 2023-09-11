import fb from '../assets/icons8-facebook.svg';
import instagram from '../assets/icons8-instagram.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="info">
        <div className="info__socials">
          <a href="#">
            <img src={fb} />
          </a>
          <a href="#">
            <img src={instagram} />
          </a>
        </div>
        <nav className="footer-nav">
          <ul className="footer-nav__list">
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
      <div className="sponsors">
        <h4 className="sponsors__title">
          VI HAR DE <strong>BEDSTE</strong> SAMARBEJDSPARTNERE
        </h4>
        <div className="sponsors__list">
          <a>
            <img
              src="https://whitsun.dk/wp-content/uploads/2023/03/Logo_DepotLF-e1678973263789.png"
              className="sponsors-logo"
            />
          </a>
          <a>
            <img
              src="https://whitsun.dk/wp-content/uploads/2023/03/ID%C2%AE-RGB.png"
              className="sponsors-logo"
            />
          </a>
          <a>
            <img
              src="https://whitsun.dk/wp-content/uploads/2023/03/Logo_LFStillads-e1678973280573.png"
              className="sponsors-logo"
            />
          </a>
          <a>
            <img
              src="https://whitsun.dk/wp-content/uploads/2023/04/Benny-Nielsen-Transport-logo_BRONZ.png"
              className="sponsors-logo"
            />
          </a>
          <a>
            <img
              src="https://whitsun.dk/wp-content/uploads/2023/03/Logo_CSvagt.png.webp"
              className="sponsors-logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
