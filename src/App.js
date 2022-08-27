import logo from './logo.svg';
import './App.css';

import TravelBlog from './Components/TravelBlog';
import Map from './Components/Map'

import Header from './Header';


function App() {
  return (
    <div className="App">

     <TravelBlog />

      <Header />
      <Map />
     Hello There

    </div>
  );
}

export default App;
