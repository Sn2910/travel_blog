import React from 'react'
const handleOnClick = () => {
  console.log("You have clicked in the specified area")
}
function Map() {
  return (
    <div className="large_map">

      <img src={require("../Images/europe.jpg")} useMap="#map-europe" width="720" height="489" />

      <map name="map-europe">
        <area shape ="poly" alt="Germany" title="Germany"  coords="465,472,548,559,502,680,414,669,393,570" onClick={()=>handleOnClick} ></area>
      </map>
    </div>
  )
}

export default Map