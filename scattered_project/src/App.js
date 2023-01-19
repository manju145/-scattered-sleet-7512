
import './App.css';
import Navbar from './navbar/Navbar';
import Navbarallpage from './navbar/navbarallpages';
import AllRouters from './Routerall/AllRouter';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Navbarallpage></Navbarallpage>
     <AllRouters></AllRouters>
    </div>
  );
}

export default App;
