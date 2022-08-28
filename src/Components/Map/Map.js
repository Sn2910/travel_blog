import React from 'react'
import { Link } from 'react-router-dom'

/* const handleOnClick = () => {
  console.log("You have clicked in the specified area")
} */
function Map({destinations}) {
 console.log(destinations)
  return (
    <div className="large_map">
      
      <img src={require("../../Images/europe.jpg")} useMap="#map-europe"  />

      <map name="map-europe">
      <Link to={`/travel-blog/${destinations[4].sys.id}`}>
      <area alt="test" title=""  coords="279,286,325,342,298,406,246,396,237,338" shape="poly" />
      </Link>
      <Link to={`/travel-blog/${destinations[0].sys.id}`}>
      <area alt="test" title=""  coords="326,386,301,400,278,409,290,416,307,429,332,428,338,413,342,399" shape="poly" />
      </Link>
      <Link to={`/travel-blog/${destinations[1].sys.id}`}>
      <area alt="test" title=""  coords="429,406,409,406,398,416,387,432,391,452,408,460,421,472,444,475,457,462,475,468,478,452,468,425,459,403" shape="poly" />
      </Link>
      <Link to={`/travel-blog/${destinations[2].sys.id}`}>
      <area alt="test" title=""  coords="247,301,237,311,226,317,221,330,231,335,242,331,247,316" shape="poly" />
      </Link>
      <Link to={`/travel-blog/${destinations[3].sys.id}`}>
      <area alt="test" title=""  coords="198,330,170,349,150,360,129,352,118,365,139,382,142,415,127,444,145,459,163,466,188,461,209,469,225,465,227,437,228,409,242,398,249,377" shape="poly" />
      </Link>
      </map>
    </div>
  )
}

export default Map