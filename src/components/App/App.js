import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import { useDispatch } from "react-redux";

import ArtistRoute from "./ArtistRoute";

import {
  requestAccessToken,
  receiveAccessToken,
  receiveAccessTokenError,
} from "../../actions";

const DEFAULT_ARTIST_ID = "6mKqFxGMS5TGDZI3XkT5Rt";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestAccessToken());

    fetch("/spotify_access_token")
      .then((res) => res.json())
      .then((data) => {
        dispatch(receiveAccessToken(data.access_token));
        console.log(data);
      })
      .catch((error) => {
        dispatch(receiveAccessTokenError());
      });
  }, []);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Redirect exact from="/" to={`artist/${DEFAULT_ARTIST_ID}`} />
          <Route path="/artist/:artistId">
            <ArtistRoute />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
