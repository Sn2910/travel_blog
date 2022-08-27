import React from 'react'
import { Link } from 'react-router-dom'
const handleOnClick = () => {
  console.log("You have clicked in the specified area")
}
function Map({destination}) {
 console.log(destination)
  return (
    <div className="large_map">
      
      <img src={require("../Images/europe.jpg")} useMap="#map-europe" width="720" height="489" />

      <map name="map-europe">
      <Link to={`/travel-blog/Germany`}>
      <area alt="test" title=""  coords="327,218,375,251,359,310,283,309,283,254" shape="poly" onClick={()=>handleOnClick}/>
      </Link>
      </map>
    </div>
  )
}

export default Map