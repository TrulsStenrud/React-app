import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TekledApp from "./Tekledelse/TekledApp";
import SpotifyApp from "./Spotify/SpotifyApp";
import MenuOverlay from "./ManuOverlay/MenuOverlay";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MenuOverlay>
        <Switch>
          <Route path="/spotify">
            <SpotifyApp />
          </Route>
          <Route path="/roles">
            <TekledApp />
          </Route>
          <Route path="/">
            Welcome
            <br />
            Currently not much to see here
          </Route>
        </Switch>
      </MenuOverlay>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
