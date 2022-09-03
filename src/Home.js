import './App.css';
import Map from './Components/Map/Map';
function Home({destinations}) {
 return (
<div className="home">
    <Map destinations={destinations} />
         {destinations.map((destination, id) => {
        console.log("dest", destination);
        })}
   
</div>
  );
}
export default Home;
