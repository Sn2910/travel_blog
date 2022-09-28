import React from "react";
import { Link } from "react-router-dom";
import "./Map.css";

/* const handleOnClick = () => {
  console.log("You have clicked in the specified area")
} */
function Map({ destinations}) {
  console.log(destinations);
  return (
    <div className="large_map">
      <div>
        <h2></h2>
        <p>
          
        </p>
      </div>
      <img src={require("../../Images/europe.jpg")} useMap="#map-europe" />

      <map name="map-europe">
        {destinations.map((destination, index) => {
          return (
            <Link to={`/travel-blog/${destination.id}`} key={index}>
              <area
                alt="test"
                title=""
                coords={destination.country_coords}
                shape="poly"
              />
            </Link>
          );
        })}
      </map>
    </div>
  );
}

export default Map;