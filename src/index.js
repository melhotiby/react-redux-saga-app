import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://rem-rest-api.herokuapp.com/api";

/* ------------- Redux Configuration ------------- */

const middleware = [];
const enhancers = [];

/* ------------- Saga Middleware ------------- */
const sageMiddleware = createSagaMiddleware();
middleware.push(sageMiddleware);

/* ------------- Logger Middleware ------------- */

middleware.push(logger);

/* ------------- Assemble Middleware ------------- */

enhancers.push(applyMiddleware(...middleware));

/* ------------- Apply REDUX Dev tools ------------- */

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

/* ------------- Create Store ------------- */

const enhancer = composeEnhancers(...enhancers);
const store = createStore(reducers, {}, enhancer);

// kick off root saga
sageMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
