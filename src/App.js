import Header from "./components/Header/Header";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; 
import AboutMe from "./components/Pages/About Me/AboutMe";


function App() {
  return <div className="App">
    <BrowserRouter>
    <Header/>
  <Switch>
    <Route exact path="/about" component={AboutMe}/>
  </Switch>
    </BrowserRouter>
  </div>
}

export default App;
