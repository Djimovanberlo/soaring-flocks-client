import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-cache-inmemory";
import { apiUrl } from "./config/constants";

// create a Http link:
const httpLink = new HttpLink({
  uri: `https://${apiUrl}`,
  credentials: "same-origin",
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `wss://${apiUrl}`,
  options: {
    reconnect: true,
  },
});

// // These are for development: removing secure connection to work on localhost
// // create a Http link:
// const httpLink = new HttpLink({
//   uri: `http://${apiUrl}`,
//   credentials: "same-origin",
// });

// // Create a WebSocket link:
// const wsLink = new WebSocketLink({
//   uri: `ws://${apiUrl}`,
//   options: {
//     reconnect: true,
//   },
// });

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    console.log(kind, operation);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

console.log("URL", apiUrl);

// Instantiate client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
