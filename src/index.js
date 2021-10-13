import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

const reducer = (state = { data: {}, filtred: false }, action) => {
  switch (action.type) {
    case "LIKED":
      return { ...state, filtred: true };
    case "ALL":
      return { ...state, filtred: false };
    case "SET":
      return {
        ...state,
        data: {
          ...state.data,
          [action.cur]: { ...state.data[action.cur], val: action.data },
        },
      };
    case "LIKE":
      return {
        ...state,
        data: {
          ...state.data,
          [action.cur]: { ...state.data[action.cur], like: true },
        },
      };
    case "DISLIKE":
      return {
        ...state,
        data: {
          ...state.data,
          [action.cur]: { ...state.data[action.cur], like: false },
        },
      };

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
