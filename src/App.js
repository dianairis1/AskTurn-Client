import React from 'react';
import Welcome from './components/Welcome/Welcome'; 
import Shops from './components/Shops/Shops';
import 'typeface-roboto';
import ExitScreen from './components/ExitScreen/ExitScreen';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShopsDashboard from './components/ShopsDashboard/ShopsDashboard';

function App() {
  return (
    <Router>
    
        <Route path="/" exact component={Welcome}/>
        <Route path="/shops" exact component={Shops}/>
        <Route path="/shops/:shopId" exact component={ShopsDashboard}/>
      

       

        {/* <ShopHeader/>
        <ExitScreen/> */}
    
    </Router>
  );
}

export default App;
