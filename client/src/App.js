import React, { Component } from 'react';
import './App.css';

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import SearchPage from "./views/Search/SearchPage.jsx";
import ResultsPage from "./views/Results/ResultsPage.jsx";
import SavedPage from "./views/Saved/SavedPage.jsx";

var hist = createBrowserHistory();


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={hist}>
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route path="/results" component={ResultsPage} />
            <Route path="/saved" component={SavedPage} />

        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
