import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Navbar from '../../components/Navbar';
import './style.css';
import Card from "../../components/Card";

// Overflow!!!

export default function Home(): JSX.Element {
  return (
    <div className="homeContainer">
      <Navbar />
      <div className="cardsField">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
