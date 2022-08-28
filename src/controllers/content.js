const apiHost = "https://cdn.contentful.com"
   const getAsset = async () =>{
    const url= `${apiHost}/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/assets?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`
     const response = await fetch(url)
     const result = await response.json()
     console.log("Assets")
     console.log(result)
     return(result)
   }
   export {getAsset}