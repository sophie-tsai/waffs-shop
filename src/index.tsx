import React from "react";
import ReactDOM from "react-dom";
import "./index.sass";
import App from "./App";
import { QueryContextProvider } from "./context/QueryContext";
import { WindowWidthProvider } from "./context/WindowWidthContext";
import { DiscountContextProvider } from "./context/DiscountContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import storeAndPersistor from "./redux/index";

const { store } = storeAndPersistor();

const client = new ApolloClient({
  uri: "https://waffs-shop.myshopify.com/api/2020-07/graphql.json",
  headers: {
    "X-Shopify-Storefront-Access-Token": `${process.env.REACT_APP_SHOPIFY_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <QueryContextProvider>
          <WindowWidthProvider>
            <DiscountContextProvider>
              <Router>
                <App />
              </Router>
            </DiscountContextProvider>
          </WindowWidthProvider>
        </QueryContextProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
