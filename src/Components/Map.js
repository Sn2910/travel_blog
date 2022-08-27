import React from 'react'

function Map() {
  return (
    <div class="large_map">

    <img src={require("../Images/europe.jpg")} usemap="#map-europe" width="720" height="489"/>

<map name="map-europe">
<area alt="Germany" title="Germany" href="/Europe/Germany/" coords="465,472,548,559,502,680,414,669,393,570" ></area>
</map>
</div>
  )
}

export default Map