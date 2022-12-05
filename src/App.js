
import "./App.css";
import "./nicepage.module.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import Header from "./components/Header";
import FooterComponent from "./components/FooterComponent";
import BodyComponent from "./components/BodyComponent";

import Shop from "./components/Shop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";

function App() {
  return (
    
    <div>
    <div>
    <Logo />
    </div>
   
    <Fragment>
      <Header>
        
      </Header>
   
    </Fragment>
  
   <FooterComponent /> 
  
    </div>
    
    
    
  );
}

export default App;
