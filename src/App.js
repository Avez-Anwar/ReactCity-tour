import React, { Component } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

//import "./App.scss";
//import Navbar from "./components/Navbar/Navbar";
//import TourList from "./components/TourList/Index";
{
  /*<Navbar />
 <TourList />*/
}

export default class App extends Component {
  render() {
    return (
      //BEM naming convention
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
