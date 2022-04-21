import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Switch>
    </Router>
  );
}

export default Routes;