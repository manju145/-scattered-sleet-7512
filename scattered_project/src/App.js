
import './App.css';
import HomePage from './homepage/homepage';
import Navbar from './navbar/Navbar';
import Navbarallpage from './navbar/navbarallpages';

import AllRouters from './Routerall/AllRouter';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Navbarallpage></Navbarallpage>
     <HomePage></HomePage>
     <AllRouters></AllRouters>
     
    
    </div>
  );
}

export default App;
