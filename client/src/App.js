import React,{useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from "./components/Footer";
import HomePage from "./screens/HomePage";
import Error from "./components/Error";
import MemeEditPage from "./screens/MemeEditPage";
function App()
{
useEffect(()=>{
  console.log=function(){}
},[]);

return (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/:id/:text_boxes" component={MemeEditPage} />
      <Route component={Error} />
    </Switch>
    <Footer />
  </Router>
);

}


export default App;
