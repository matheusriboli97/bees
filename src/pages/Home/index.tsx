import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "./style.css";
import Card from "../../components/Card";
import { api } from "../../services/api";
import { ApiResult, Breweries } from "../../models";
import { UserContext } from "../../context/UserContext";
import { ChipMessage } from "../../components/ChipMessage";

export default function Home(): JSX.Element {
  const [breweries, setBreweries] = useState<Breweries[]>([]);
  const [dataIsLoading, setDataIsLoading] = useState<boolean>(true);
  const { chipDetails } = useContext(UserContext);

  useEffect(() => {
    setDataIsLoading(true);
    api.get("/breweries").then((res: ApiResult) => {
      if (res.status === 200) {
        setBreweries(res.data);
        setDataIsLoading(false);
      } else {
        alert("Error requesting the api!");
        setDataIsLoading(false);
      }
    });
  }, []);

  const removeCard = (id: number): void => {
    setDataIsLoading(true);
    let newBreweries: Breweries[] = breweries;
    newBreweries = breweries.filter((brewery: Breweries) => brewery.id !== id);
    setBreweries(newBreweries);
    setDataIsLoading(false);
  };

  return (
    <div className="homeContainer">
      <Navbar />
      {dataIsLoading && (
        <div className="loadingData">
          <h1>Loading ...</h1>
        </div>
      )}
      {!dataIsLoading && (
        <section className="cardsField">
          {breweries.map((brewery: Breweries) => (
            <div key={brewery.id}>
              <Card Brewery={brewery} removeCard={removeCard} />
            </div>
          ))}
        </section>
      )}
      {chipDetails.show && (
        <div className={chipDetails.success ? 'chipSuccess' : 'chipError'}>
          <ChipMessage
            message={chipDetails.message}
          />
        </div>
      )}
    </div>
  );
}
