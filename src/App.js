import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/layout/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import Profile from './components/pages/Profile';
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
