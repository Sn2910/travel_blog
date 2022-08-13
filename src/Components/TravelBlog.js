import React, { useEffect } from 'react'

const apiHost = "https://cdn.contentful.com"

function TravelBlog() {
    const getData = async () =>{
        
         const response = await fetch(`https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`)
         const result = await response.json()
         console.log(result)
         console.log("Shopping")
         const destId1 ='3nZZzJ6iJ17V2wCrWySzxN'
         console.log(result.items.filter((item)=>item.sys.contentType.sys.id === 'shopping' && item.fields.destination.sys.id === destId1))

        
    }
         
    useEffect(()=>{
        getData()
    })

  return (
    <div>
      
    </div>
  )
}

export default TravelBlog
