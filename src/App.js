import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Err404 from "./pages/Err404/Err404";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="text-center">
          <NavBar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/list" component={List} />
              <Route component={Err404} />
            </Switch>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
