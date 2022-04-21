import { FunctionComponent, useContext, useEffect, useState } from "react";
import "./style.css";
import Bee from "../../assets/Bee.svg";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

export default function Login(): JSX.Element {
  const { setName, showChip } = useContext(UserContext);
  const [dataIsReady, setDataIsReady] = useState<boolean>(false);
  const [currentName, setCurrentName] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    hasInvalidChars()
    if (currentName.length && isChecked && hasInvalidChars()) {
      setDataIsReady(true);
    } else {
      setDataIsReady(false);
    }
  }, [currentName, isChecked]);

  const hasInvalidChars = (): boolean => {
    var letters = /^[0-9a-zA-Z]+$/;
    if (letters.test(currentName)) {
      setErrorMessage(null);
      return true;
    } else {
      if(currentName.length !== 0) {
        setErrorMessage('Just Valid Characters Please.')
      }
    return false;
    }
  };

  return (
    <div className="loginContainer">
      <div className="centerContainer">
        <section>
          <p>Please, enter you full name below</p>
          <p>Only alphabetical characters are accepted</p>
        </section>
        <input
          type="text"
          placeholder="Full Name"
          className="textInput"
          onChange={(e) => setCurrentName(e.target.value)}
        />
        <p className="errorMessage">{errorMessage}</p>
        <section className="checkboxField">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked((state) => !state)}
          />
          <label>Are you older that 18 years old?</label>
        </section>
        <button onClick={() => setName(currentName)} disabled={!dataIsReady}>
          <Link to="/home">Enter</Link>
        </button>
      </div>
      <footer>
        <img src={Bee} alt="bee" />
      </footer>
    </div>
  );
}
