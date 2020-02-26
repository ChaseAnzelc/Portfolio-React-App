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
          <Route exact path="/(|index.html)/" component={Home}/>
          <Route path="/Projects/:projectname" component={Projects}/>
        </Switch>
        <Footer />
        <a href="#header" className="back-to-top"><i className="icofont-simple-up"></i></a>
      </BrowserRouter>
    </div>
  );
}

export default App;
