import "./App.css";
import { useState, useEffect } from "react";
import Map from "./Components/Map/Map";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import {Outlet} from 'react-router-dom'
import Home from './Home'
import TravelInfo from './Components/TravelInfo/TravelInfo'
import Contact from './Pages/Contact'
import About from './Pages/About'


function App() {
  const [getInfo, setGetInfo] = useState(false)
/*    const { country } = useParams();  */
    const getData = async () =>{ 
         const response = await fetch(`https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`)
         const result = await response.json()
         setGetInfo(result)
         console.log(result)
       /*  console.log("Shopping")
         const destId1 ='3nZZzJ6iJ17V2wCrWySzxN'
         console.log(result.items.filter((item)=>item.sys.contentType.sys.id === 'shopping' && item.fields.destination.sys.id === destId1))  */
    }
         
    useEffect(()=>{
        getData()
    },[])
    if(!getInfo){
      return <div>Loading...</div>
    }
    const destinations = getInfo.items.filter(
      (item,index) => item.sys.contentType.sys.id === "destinations"
      
    )
   
  return (
    <div className="App">
       <Header destinations={destinations} />
       <Routes>
            <Route path='/' element={<Home destinations={destinations} />}/>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />  
            <Route path='/travel-blog/:id' element={<TravelInfo />} />  
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
