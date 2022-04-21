import Trash from "../../assets/Trash.svg";
import Phone from "../../assets/Phone.svg";
import ChartSquareBar from "../../assets/ChartSquareBar.svg";
import LocationMarker from "../../assets/LocationMarker.svg";
import PlusCircle from "../../assets/PlusCircle.svg";
import CheckCircle from "../../assets/CheckCircle.svg";
import { Breweries } from "../../models";
import { Modal } from "../Modal";
import "./style.css";
import { Fragment, useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

interface CardProps {
  Brewery: Breweries;
  removeCard: (id: number) => void;
  insertNewTag: (id: number, tag: string) => void;
}

export default function Card(props: CardProps): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showEditField, setShowEditField] = useState<boolean>(false);
  const [newTag, setNewTag] = useState<string>('');
  const { Brewery, removeCard, insertNewTag } = props;
  const { showChip } = useContext(UserContext);

  const onSaveClose = (): void => {
    removeCard(Brewery.id);
    showChip({
      message: "Card Removed !",
      show: true,
      success: true,
    });
    setShowModal(false);
  };

  const onCancelClose = (): void => {
    setShowModal(false);
  };

  const onInsert = (): void => {
    setShowEditField(false);
    insertNewTag(Brewery.id, newTag);
  }

  return (
    <Fragment>
      {showModal && (
        <Modal onSaveClose={onSaveClose} onCancelClose={onCancelClose} />
      )}
      {!showModal && (
        <div className={showModal ? "cardContainerWithModal" : "cardContainer"}>
          <img
            className="trashImage"
            src={Trash}
            alt="Trash"
            onClick={() => setShowModal(true)}
          />
          <header>
            <p className="title">
              {Brewery.name ? Brewery.name : "No Name Found"}
            </p>
          </header>
          <section className="description">
            <p>{Brewery.street ? Brewery.street : "No Street Found"}</p>
            <p>
              {Brewery.city ? Brewery.city : "No City Found"},{" "}
              {Brewery.state ? Brewery.state : "No State Found"} -{" "}
              {Brewery.country ? Brewery.country : "No Country Found"}
            </p>
          </section>
          <div className="flagsField">
            <div className="tagField">
              <img src={ChartSquareBar} alt="ChartSquareBar" />
              <p>
                {Brewery.brewery_type ? Brewery.brewery_type : "No Type Found"}
              </p>
            </div>
            <div className="tagField">
              <img src={LocationMarker} alt="LocationMarker" />
              <p>
                {Brewery.postal_code
                  ? Brewery.postal_code
                  : "No Zip Code Found"}
              </p>
            </div>
            <div className="tagField">
              <img src={Phone} alt="Phone" />
              <p>{Brewery.phone ? Brewery.phone : "No Phone Found"}</p>
            </div>
            <div className="tagField">
              {!showEditField && !Brewery.hasPlusTag && (
                <Fragment>
                  <img
                    src={PlusCircle}
                    alt="PlusCircle"
                    onClick={() => setShowEditField(true)}
                    className="plusCircle"
                  />
                  <p>Add More</p>
                </Fragment>
              )}
              {!showEditField && Brewery.hasPlusTag && (
                <Fragment>
                  <p>{Brewery.plusTag}</p>
                </Fragment>
              )}
              {showEditField && (
                <div className="editableField">
                  <img src={CheckCircle} alt="CheckCircle" onClick={onInsert} />
                  <input className="inlineInput" type="text" onChange={(e) => setNewTag(e.target.value)} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
