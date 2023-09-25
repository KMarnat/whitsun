import ticket from '../assets/ticket.png';

export default function Ad() {
  return (
    <section className="ad">
      <div className="ad__background">
        <div className="content">
          <p className="content__text">
            Vi byder på locale smagsoplevelser, <br /> samfunds 'talks' med kant i<br /> kombination
            med musikalske toner,
            <br /> som vi kender.
            <br /> <strong>Christianssæde</strong> park danner rammer for
            <br /> Whitsun Festival Lolland
          </p>
          <div className="ticket">
            <h4 className="ticket__title">Find Din festivalbillet her</h4>
            <span className="ticket__bg">
              <img src={ticket} alt="ticket" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
