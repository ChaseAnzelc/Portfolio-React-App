import React from 'react';
import './App.css';
import './Responsive.css';
import Footer from './components/layouts/Footer.js';
import Home from './components/pages/Home/Home.js';
import Projects from './components/pages/Projects/Projects.js';
import { BrowserRouter, Switch, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Projects" component={Projects}/>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
