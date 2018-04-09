import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Homepage from "./pages/homepage";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <hr/>
          <Switch>
            <Redirect exact from="/" to="/homepage" />
            <Route path="/homepage" component={Homepage} />
          </Switch>
          <hr/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
