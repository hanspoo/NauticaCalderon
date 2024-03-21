import data from "../data/boats.json";

export default function Products(props) {
  const handleClick = props.manejar;
  return (
    <section className="cards">
      <div className="container">
        <article className="cards-holder">
          {data.map((d) => {
            return (
              <div className="card">
                <div className="img">
                  <img src={d.imagen} alt="Boat" />
                </div>
                <div className="info flex-between">
                  <a href="#" className="name">
                    {d.tittle}
                  </a>
                  <div className="price">
                    <span className="currency">{d.value}</span>
                    <span className="duration">{d.duracion}</span>
                  </div>
                </div>
                <div className="data flex-between">
                  <div className="guest inf">
                    <i className="fas fa-user" />
                    <span>{d.personas}</span>
                  </div>
                  <div className="beds inf">
                    <i className="fas fa-bed" />
                    <span> {d.bedrooms} </span>
                  </div>
                  <div className="feets inf">
                    <i className="fas fa-arrows-h" />
                    <span>{d.largo}</span>
                  </div>
                  <div className="entertain inf">
                    <i className="far fa-columns" />
                    <span>{d.info}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </article>

        <button className="btn btn-main subir" onClick={handleClick}>
          VIEW ALL BOATS
        </button>
      </div>
    </section>
  );
}
