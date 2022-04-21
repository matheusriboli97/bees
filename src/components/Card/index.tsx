import Trash from '../../assets/Trash.svg';
import Phone from '../../assets/Phone.svg'
import ChartSquareBar from '../../assets/ChartSquareBar.svg'
import LocationMarker from '../../assets/LocationMarker.svg'
import PlusCircle from '../../assets/PlusCircle.svg'
import { Breweries } from '../../models';
import "./style.css";

interface CardProps {
  Brewery: Breweries,
  removeCard: (id: number) => void
}

export default function Card(props: CardProps): JSX.Element {

  const {Brewery, removeCard} = props;
  return (
    <div className="cardContainer">
      <img className="trashImage" src={Trash} alt="Trash" onClick={() => removeCard(Brewery.id)} />
      <header>
        <p className="title">{Brewery.name ? Brewery.name : 'No Name Found'}</p>
      </header>
      <section className="description">
        <p>{Brewery.street ? Brewery.street : 'No Street Found'}</p>
        <p>{Brewery.city ? Brewery.city : 'No City Found'}, {Brewery.state ? Brewery.state : 'No State Found'} - {Brewery.country ? Brewery.country : 'No Country Found'}</p>
      </section>
      <div className="flagsField">
        <div className="flagField">
          <img src={ChartSquareBar} alt="ChartSquareBar" />
          <p>{Brewery.brewery_type ? Brewery.brewery_type : 'No Type Found'}</p>
        </div>
        <div className="flagField">
          <img src={LocationMarker} alt="LocationMarker" />
          <p>{Brewery.postal_code ? Brewery.postal_code : 'No Zip Code Found'}</p>
        </div>
        <div className="flagField">
          <img src={Phone} alt="Phone" />
          <p>{Brewery.phone ? Brewery.phone : 'No Phone Found'}</p>
        </div>
        <div className="flagField">
          <img src={PlusCircle} alt="PlusCircle" />
          <p>Add More</p>
        </div>
      </div>
    </div>
  );
}
