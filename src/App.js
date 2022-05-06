import React from "react";
import "./App.css";
import Header from "./Componets/Header";
import Main from "./Componets/Main";
import About from "./Componets/About";
import BookModels from "./Componets/BookModels";
import HowItWorks from "./Componets/HowItWorks";
import Pricing from "./Componets/Pricing";
import Join from "./Componets/Join";
import Comments from "./Componets/Comments";
import Footer from "./Componets/Footer";
import Login from "./Componets/Login";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Main />
          <About />
          <BookModels />
          <HowItWorks />
          <Pricing />
          <Join />
          <Comments />
          <Footer />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
      </Switch>
    </>
  );
}
