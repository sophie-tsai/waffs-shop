import React from "react";
import ReactDOM from "react-dom";
import "./index.sass";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux";
import { QueryContextProvider } from "./context/QueryContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://waffs-shop.myshopify.com/api/2020-07/graphql.json",
  headers: {
    "X-Shopify-Storefront-Access-Token": `${process.env.REACT_APP_SHOPIFY_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <QueryContextProvider>
          <Router>
            <App />
          </Router>
        </QueryContextProvider>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
