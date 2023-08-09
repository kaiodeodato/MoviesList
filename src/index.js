import React from "react";
import ReactDOM from "react-dom/client";
import { Routes,Route,HashRouter,BrowserRouter} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);

