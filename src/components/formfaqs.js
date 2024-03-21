export default function FormFaqs() {
  return (
    <section className="booking" id="book-now">
      <div className="container flex-start">
        <article className="book-form">
          <div className="book-head">
            <h1>Booking Form</h1>
            <p>
              Dolore magna aliqua enim ad minim veniam, quis
              nostrudreprehenderits dolore fugiat nulla pariatur lorem ipsum
              dolor sit amet.
            </p>
            <img src="./Imgs/decoreGold.png" alt="Img" />
          </div>
          <form action="" method="" className="flex-between">
            <input
              type="text"
              placeholder="First Name"
              className="half name"
              required=""
            />
            <input
              type="text"
              placeholder="Last Name"
              className="half name"
              required=""
            />
            <input
              type="email"
              placeholder="Email"
              className="half"
              required=""
            />
            <input
              type="text"
              placeholder="Phone"
              className="half phone"
              required=""
            />
            <input
              type="text"
              placeholder="Subject"
              className="subject full"
              required=""
            />
            <textarea
              name="Message"
              id="Message"
              placeholder="Message"
              rows={6}
              className="full"
              required=""
              defaultValue={""}
            />
            <input
              type="submit"
              name="submit"
              id="submit"
              defaultValue="SUBMIT"
              className="main full"
            />
          </form>
        </article>
        <article className="FAQ">
          <div className="book-head">
            <h1>Boat Rental FAQ’s</h1>
            <p>
              Dolore magna aliqua enim ad minim veniam, quis
              nostrudreprehenderits dolore fugiat nulla pariatur lorem ipsum
              dolor sit amet.
            </p>
            <img src="./Imgs/decoreGold.png" alt="Img" />
          </div>
          <article className="FAQ-holder">
            <div className="question-holder">
              <span className="question">
                <span>How to book a yacht/boat from Nevica?</span>
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
                <span> What are the safety precautions mentioned by you?</span>
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
                <span> What if the weather gets unfavourable for boating?</span>
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
                <span>Can i bring my own food or drinking water?</span>
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
