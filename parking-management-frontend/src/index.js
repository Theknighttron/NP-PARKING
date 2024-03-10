import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from 'react-query';
import App from "./App";


//Initialize the client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

if(module.hot) {
  module.hot.accept();
}
