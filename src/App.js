import React from 'react';
import Welcome from './components/Welcome/Welcome'; 
import Shops from './components/Shops/Shops';
import Search from './components/Shops/Search/Search';
import 'typeface-roboto';
import ShopHeader from './components/ShopsDashboard/ShopHeader/ShopHeader';
import CountDown from './components/ShopsDashboard/CountDown/CountDown';
import Turns from './components/ShopsDashboard/Turns/Turns';
import Footer from './components/ShopsDashboard/Footer/Footer';
import ExitScreen from './components/ExitScreen/ExitScreen';

function App() {
  return (
    <div>
        {/* <Welcome/> */}

        <Shops/>
        <Search/> 

        {/* <ShopHeader/> 
        <CountDown/>
        <Turns title="Turnos en espera" turnNumber={0} />
        <Turns title="Tu turno" turnNumber={0} />
        <Footer buttonTitle="Unirse a la fila"/>  */}

        {/* <ShopHeader/>
        <ExitScreen/> */}
    </div>
  );
}

export default App;
