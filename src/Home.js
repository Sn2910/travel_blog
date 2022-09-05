import './App.css';
import Map from './Components/Map/Map';
function Home({destinations, tourInfo}) {
 return (
<div className="home">
    <Map destinations={destinations} tourInfo ={tourInfo}/>
         {destinations.map((destination, id) => {
        console.log("dest", destination);
        })}
   
</div>
  );
}
export default Home;
