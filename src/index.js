import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

const iconState = {
  btc: "https://profinvestment.com/wp-content/plugins/coin-market-cap/assets/coins-logos/bitcoin.svg",
  eth: "https://profinvestment.com/wp-content/plugins/coin-market-cap/assets/coins-logos/ethereum.svg",
  bnb: "https://profinvestment.com/wp-content/plugins/coin-market-cap/assets/coins-logos/binancecoin.svg",
  bch: "https://assets.coingecko.com/coins/images/7451/large/GZZkGaIh_400x400.jpg",
  ada: "https://profinvestment.com/wp-content/plugins/coin-market-cap/assets/coins-logos/cardano.svg",
  xrp: "https://profinvestment.com/wp-content/plugins/coin-market-cap/assets/coins-logos/ripple.svg",
  sol: "https://assets.coingecko.com/coins/images/4128/large/coinmarketcap-solana-200.png",
  dot: "https://profinvestment.com/wp-content/plugins/coin-market-cap/assets/coins-logos/polkadot.svg",
};

const reducer = (
  state = { data: {}, filtred: false, icon: iconState },
  action
) => {
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
