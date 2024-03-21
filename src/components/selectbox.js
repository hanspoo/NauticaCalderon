export default function SelectBox() {
  return (
    <section className="select flex-between">
      <article className="box">
        <span>Select Boat Type</span>
        <button className="drop-down">
          <span className="selected" />
          <ul className="options-list" data-index={0}>
            <li selected="">Celebrations</li>
            <li>Journey</li>
            <li>Fishing</li>
          </ul>
        </button>
      </article>
      <article className="box">
        <span>Select a Model</span>
        <button className="drop-down">
          <span className="selected" />
          <ul className="options-list" data-index={1}>
            <li selected="">Model 1</li>
            <li>Model 2</li>
            <li>Model 3</li>
          </ul>
        </button>
      </article>
      <article className="box">
        <span>Price Range</span>
        <button className="drop-down">
          <span className="selected" />
          <ul className="options-list" data-index={2}>
            <li selected="">Max $50 Perday</li>
            <li>Max $100 Perday</li>
            <li>Max $150 Perday</li>
          </ul>
        </button>
      </article>
      <button className="main search">Search</button>
    </section>
  );
}
