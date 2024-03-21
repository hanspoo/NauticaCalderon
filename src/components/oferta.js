export default function Oferta() {
  return (
    <section className="deal ">
      <div className="container">
        <article className="day-deal flex-between">
          <img src="./Imgs/deal-weak.jpg" alt="Deal" />
          <article className="deal-content">
            <span className="head">Deal Of The Week</span>
            <p className="boat-name">
              DayDream Boat <span>Rent For $800 / HRS</span>
            </p>
            <p className="boat-data">
              Builder /Model: French Waves | Type/Year: House Boat 2019 |
              Length: 105 FT 32 M Charter Guests: 200 | Crew Members: 6
            </p>
            <i className="fas fa-phone-alt" />
            <span>
              Booking a Charter Boat
              <span className="number">+1 755 302 8549</span>
            </span>
          </article>
        </article>
      </div>
    </section>
  );
}
