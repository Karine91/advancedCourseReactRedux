import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import App from "./components/App";
import Welcome from "./components/Welcome";
import SignUp from "./components/auth/SignUp";
import Signout from "./components/auth/Signout";
import Signin from "./components/auth/Signin";
import Feature from "./components/Feature";

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/feature" exact component={Feature} />
        <Route path="/signout" exact component={Signout} />
        <Route path="/signin" exact component={Signin} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
