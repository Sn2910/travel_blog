import React from 'react'
const handleOnClick = (e) => {
  e.preventDefault();
  console.log("You have clicked in the specified area")
}
function Map() {
  return (
    <div class="large_map">

    <img src={require("../Images/europe.jpg")} usemap="#map-europe" width="720" height="489"/>
    
<map name="map-europe">
<area alt="Germany" title="Germany" href="/Europe/Germany/" coords="465,472,548,559,502,680,414,669,393,570" onClick={handleOnClick}></area>
</map>
</div>
  )
}

export default Map