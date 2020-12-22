import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react'
import DrawerPrincipal from './Components/Organimsm/DrawerPrincipal';
import Home from './Components/Pages/Home';
import Primero from './Components/Pages/Primero';
import Segundo from './Components/Pages/Sengundo';
import './index.css'


function App() {
  return (
    <Router>
      <DrawerPrincipal/>
      <Switch>
        <Route exact path='/' component={props=><Home {...props}/>}/>
        <Route path='/primero' component={props=><Primero {...props}/>}/>
        <Route path='/segundo' component={props=><Segundo {...props}/>}/>
      </Switch>
    </Router>
    
  );
}

export default App;
