import { FormContacto } from "./formcontacto.tsx";

export default function FormFaqs() {
  return (
    <section className="booking" id="book-now">
      <div className="container flex-start">
        <article className="book-form">
          <div className="book-head">
            <h1>Formulario De Contacto</h1>
            <p>
              ¿Tiene alguna duda? ¡Déjenos ayudarlo! Complete este formulario y
              estaremos encantados de responder a sus consultas.
            </p>
            <img src="./Imgs/decoreGold.png" alt="Img" />
          </div>

          <FormContacto></FormContacto>
        </article>
        <article className="FAQ">
          <div className="book-head">
            <h1>Preguntas Frecuentes</h1>
            <p>
              Explora nuestras preguntas frecuentes, si no encuentras lo que
              buscas, no dudes en ponerte en contacto con nosotros.
            </p>
            <img src="./Imgs/decoreGold.png" alt="Img" />
          </div>
          <article className="FAQ-holder">
            <div className="question-holder">
              <span className="question">
                <span>¿Como compro una lancha?</span>
              </span>
              <div className="answer">
                <p>
                  Quis nostrud exercitate laboridy aliquip duis irure sed dolor
                  ipsum excpture fugiat estan veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex velit esse cillum dolore eu
                  fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="question-holder">
              <span className="question">
                <span>
                  {" "}
                  ¿Que necesito para poder usar la lancha en una mole de agua?
                </span>
              </span>
              <div className="answer">
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson
                </p>
              </div>
            </div>
            <div className="question-holder">
              <span className="question">
                <span> ¿Todas las lanchas tienen carro?</span>
              </span>
              <div className="answer">
                <p>
                  truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                  tempor, sunt aliqua put a bird on it squid single-origin
                  coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson Anim pariatur cliche
                  reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat
                  skateboard dolor brunch.
                </p>
              </div>
            </div>
            <div className="question-holder">
              <span className="question">
                <span>¿de que formas puedo realizar el pago de la flota?</span>
              </span>
              <div className="answer">
                <p>
                  Nliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat
                  skateboard dolor brunch. Food truck quinoa nesciunt laborum
                  eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on
                  it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                </p>
              </div>
            </div>
          </article>
        </article>
      </div>
    </section>
  );
}
