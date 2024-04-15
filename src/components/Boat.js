import data from "../data/boats.json";
import { Link } from "react-router-dom";

export default function Products(props) {
  const handleClick = props.manejar;
  return (
    <section className="cards">
      <div className="container">
        <article className="cards-holder">
          {data.map((d) => {
            return (
              <div className="card ">
                <Link to={`/Listadebotes/${d.id}`}>
                  <div className="img">
                    <img src={d.imagen} alt="Boat" />
                  </div>
                  <div className="info flex-between p-3">
                    <a>{d.tittle}</a>
                    <div className="price">
                      <span className="currency">{d.value}</span>
                    </div>
                  </div>
                  <div className="data flex-between p-3">
                    <div className="guest inf">
                      <i className="fas fa-user " />
                      <span> {d.personas}</span>
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
                </Link>
              </div>
            );
          })}
        </article>
        <button className="btn btn-main subir">
          <Link to="/Listadebotes">VER TODAS</Link>
        </button>
      </div>
    </section>
  );
}
