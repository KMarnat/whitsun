import ticket from '../assets/ticket.png';

export default function Ad() {
  return (
    <section className="ad">
      <div className="ad__background">
        <div className="ad__content">
          <p className="ad__content-p">
            Vi byder på locale smagsoplevelser, <br /> samfunds 'talks' med kant i<br /> kombination
            med musikalske toner,
            <br /> som vi kender.
            <br /> <strong>Christianssæde</strong> park danner rammer for
            <br /> Whitsun Festival Lolland
          </p>
          <div className="ad__ticket">
            <h4 className="ad__ticket-title">Find Din festivalbillet her</h4>
            <span className="ad__ticket-bg">
              <img src={ticket} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
