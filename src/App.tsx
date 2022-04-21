import { useContext, useState } from "react";
import "./App.css";

import Routes from "./routes";
import { UserProvider } from "./context/UserContext";

export default function App() {

  return (
    <div className="App">
      <UserProvider>
        <Routes />
      </UserProvider>
    </div>
  );
}
