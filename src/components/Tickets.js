import tickets from "../tickets";
import backgroundtubes from "../assets/backgroundtubes.svg";

export default function Tickets() {
  return (
    <section className="festival">
      <div className="festival__title">
        <h1 className="festival__name">
          <strong>FEST</strong>IVALBILLET
        </h1>
      </div>
      <div className="tickets">
        <p className="tickets__paragraph">
          Aenean tellus odio, varius sed ex ut, condimentum lobortis nibh. Aenean rhoncus urna sit
          amet vehicula pulvinar. In sit amet finibus odio. Aenean odio arcu, accumsan nec blandit
          vitae, interdum vel dolor. Fusce nunc mauris, porta vitae sapien sit amet, sodales lacinia
          lorem.
        </p>
        <div className="tickets__grid">
          {tickets.map((ticket, i) => (
            <div className="ticket" key={i}>
              <span className="ticket__background">
                <img src={backgroundtubes} alt="ticket background" />
              </span>
              <h4 className="ticket__name">{ticket.name}</h4>

              <span className="ticket__price">{ticket.price}</span>

              <p className="ticket__description">{ticket.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
