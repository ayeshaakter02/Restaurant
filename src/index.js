import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals.js";
// import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <StoreContextProvider>
  //   <AuthProvider>
  //     <QueryClientProvider client={queryClient}>
  //       <App />
  //     </QueryClientProvider>
  //   </AuthProvider>
  // </StoreContextProvider>
  <React.StrictMode>
    <AuthProvider>
      <StoreContextProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </StoreContextProvider>
    </AuthProvider>
  </React.StrictMode>
  
);

reportWebVitals();
