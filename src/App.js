import {
  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
  import React, {useState} from 'react'
import './Assets/scss/index.scss'

import Navbar from './Layout/Navbar/Navbar'

import Index from './Views/index'
import produits from './Data/produits'


function App() {

  const [cartUpdate, setCartUpdate] = useState([])

  console.log(cartUpdate);


  return (
    <Router>
     <Navbar cartUpdate={cartUpdate}/>
      <Switch>
        <Route path="/" >
          <Index produits ={produits} setCartUpdate={setCartUpdate} cartUpdate={cartUpdate}/>
        </Route>
      </Switch>
     </Router>
  );
}

export default App;
