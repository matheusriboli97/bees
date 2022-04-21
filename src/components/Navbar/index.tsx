import { FunctionComponent, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import ArrowLeft from '../../assets/ArrowLeft.svg';
import './style.css';
import { Link } from "react-router-dom";

export default function Navbar(): JSX.Element {
  const { name } = useContext(UserContext);

  return (
    <nav className="navbarContainer">
      <div className="turnBack">
        <Link to='/'>
        <img className="turnBackImage" src={ArrowLeft} alt="ArrowLeft" />
        </Link>
        <p>Go Back</p>
      </div>
      <div className="nameField">
       <p>{name}</p>
      </div>
    </nav>
  );
};