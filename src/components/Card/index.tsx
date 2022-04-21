import Trash from '../../assets/Trash.svg';
import Phone from '../../assets/Phone.svg'
import ChartSquareBar from '../../assets/ChartSquareBar.svg'
import LocationMarker from '../../assets/LocationMarker.svg'
import PlusCircle from '../../assets/PlusCircle.svg'
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
          <img src={ChartSquareBar} alt="ChartSquareBar" />
          <p>micro</p>
        </div>
        <div className="flagField">
          <img src={LocationMarker} alt="LocationMarker" />
          <p>46534</p>
        </div>
        <div className="flagField">
          <img src={Phone} alt="Phone" />
          <p>6308165790</p>
        </div>
        <div className="flagField">
          <img src={PlusCircle} alt="PlusCircle" />
          <p>add more</p>
        </div>
      </div>
    </div>
  );
}
