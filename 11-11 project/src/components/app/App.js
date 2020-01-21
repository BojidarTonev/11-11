import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Main from "./main/main"
import About from "../about/about"
import Index from "../index/index"
import Header from "../header/header"
import Artwork from "../artwork/artwork"
import Footer from "../footer/footer"
import Contact from "../contact/contact"
import NotFound from "../not-found/not-found"

import '../../shared/styles/site.css';

function render(title, Cmp, description) {
  return function(props) {
    if (!description) {
      description = GetDescription(title);
    }
    return (
      <Main title={title} description={description}>
        <Cmp {...props}></Cmp>
      </Main>
    );
  };
}

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact render={render("Who are we?", Index)}/>
          <Route path="/about" render={render("About", About)}/>
          <Route path="/contact" render={render("Contact us", Contact)} />
          <Route path="/artwork" render={render("Artwork", Artwork)} />

          <Route path="*" render={render("Not found", NotFound)} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

function GetDescription(title) {
  if(title === "Who are we?"){
    return ""
  } else if (title === "About"){
    return "";
  } else if (title === "Artwork"){
    return ""
  } else if (title === "Contact us"){
    return ""
  }
  return "Sorry, url may be broken, but page not found ;("
}

export default App;