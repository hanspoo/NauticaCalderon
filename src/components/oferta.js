import { MapaUbicacion } from "./MapaUbicacion";

export default function Oferta() {
  return (
    <section className="deal ">
      <div className="container">
        <article className="day-deal flex-between p-2">
          <div id="conte" className=" w-100">
            <MapaUbicacion lan={-39.287412} lon={-71.945446} />
          </div>
          <article className="deal-content">
            <span className="head">¿Donde Encontrarnos?</span>
            <p className="boat-name">Nuestra Ubicación</p>
            <p className="boat-data">
              País: Chile | Región: Araucanía | Comuna: Pucón | Dirección:
              Camino internacional 2173 | Nos encontramos detras de la Aramco
              entrando por el camino de tierra.
            </p>
            <i className="fas fa-phone-alt" />
            <span>
              llamar
              <span className="number">
                {" "}
                <a href="tel:+56975633454" style={{ color: "white" }}>
                  +56 9 7563 3454
                </a>
              </span>
            </span>
            <div id="linkcontacto" />
          </article>
        </article>
      </div>
    </section>
  );
}
