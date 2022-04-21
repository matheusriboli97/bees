import Trash from '../../assets/Trash.svg';
import "./style.css";

export default function Card(): JSX.Element {
  return (
    <div className="cardContainer">
      <img className="trashImage" src={Trash} alt="Trash" />
      <header>
        <p className="title">10-56 Brewing Company</p>
      </header>
      <section className="description">
        <p>400 Brown cir</p>
        <p>Knox, Indiana - United States</p>
      </section>
      <div className="flagsField">
        <div className="flagField">
          <p>micro</p>
        </div>
        <div className="flagField">
          <p>46534</p>
        </div>
        <div className="flagField">
          <p>6308165790</p>
        </div>
        <div className="flagField">
          <p>add more</p>
        </div>
      </div>
    </div>
  );
}
