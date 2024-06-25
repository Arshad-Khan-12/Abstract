import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import "./index.css";
import Search from "./Search";
import Content from "./Content";
import Footer from "./Footer";
import Help from "./Help";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Search />
    <Content />
    <Footer />
    <Help />
  </React.StrictMode>
);
