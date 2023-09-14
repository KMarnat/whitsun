import halfcirclegreen from '../assets/half-circle-green.png';
import tickets from '../tickets';
import backgroundtubes from '../assets/backgroundtubes.svg';

export default function Tickets() {
  return (
    <section className="festival">
      <div className="festival-title">
        <img src={halfcirclegreen} className="festival-title__icon" />
        <h2 className="festival-title__name">
          <strong>FEST</strong>IVALBILLET
        </h2>
      </div>
      <div className="tickets">
        <p className="tickets__description">
          Aenean tellus odio, varius sed ex ut, condimentum lobortis nibh. Aenean rhoncus urna sit
          amet vehicula pulvinar. In sit amet finibus odio. Aenean odio arcu, accumsan nec blandit
          vitae, interdum vel dolor. Fusce nunc mauris, porta vitae sapien sit amet, sodales lacinia
          lorem.
        </p>
        <div className="tickets__grid">
          {tickets.map((ticket, i) => (
            <div className="ticket" key={i}>
              <span className="ticket__background">
                <img src={backgroundtubes} />
              </span>
              <h4 className="ticket__name">{ticket.name}</h4>
              <p className="ticket__price">
                <span>{ticket.price}</span>
              </p>
              <p className="ticket__desc">{ticket.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
