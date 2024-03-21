export default function Boat() {
  return (
    <div className="card">
      <div className="img">
        <img src="./Imgs/b001.jpg" alt="Boat" />
      </div>
      <div className="info flex-between">
        <a href="#" className="name">
          Golden Odyssey
        </a>
        <div className="price">
          <span className="currency">$140</span>
          <span className="duration">Per Day</span>
        </div>
      </div>
      <div className="data flex-between">
        <div className="guest inf">
          <i className="fas fa-user" />
          <span>12 Guests</span>
        </div>
        <div className="beds inf">
          <i className="fas fa-bed" />
          <span> 2 Master Bedroom </span>
        </div>
        <div className="feets inf">
          <i className="fas fa-arrows-h" />
          <span> 44 Feet</span>
        </div>
        <div className="entertain inf">
          <i className="far fa-columns" />
          <span>Sun Deck, Kitchen ...</span>
        </div>
      </div>
    </div>
  );
}
