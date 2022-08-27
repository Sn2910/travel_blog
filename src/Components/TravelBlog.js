import React, { useEffect, useState } from 'react'
import Map from './Map'

const apiHost = "https://cdn.contentful.com"

function TravelBlog() {
  const [getInfo, setGetInfo] = useState(false)
/*    const { country } = useParams();  */
    const getData = async () =>{
        
         const response = await fetch(`https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`)
         const result = await response.json()
         setGetInfo(result)
         console.log(result)
         console.log("Shopping")
         const destId1 ='3nZZzJ6iJ17V2wCrWySzxN'
         console.log(result.items.filter((item)=>item.sys.contentType.sys.id === 'shopping' && item.fields.destination.sys.id === destId1))

        
    }
         
    useEffect(()=>{
        getData()
    },[])
    if(!getInfo){
      return <div>Loading...</div>
    }
    const destinations = getInfo.items.filter(
      (item) => item.sys.contentType.sys.id === "destinations"
    );
  return (
    <div>
      {destinations.map((destination, id) => {
        console.log("dest", destination);
    <Map destination = {destination} key ={id} />
      })}
    </div>
  )
}

export default TravelBlog
