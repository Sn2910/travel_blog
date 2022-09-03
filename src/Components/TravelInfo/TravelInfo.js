import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  {getAsset} from '../../controllers/content'
import Header from '../Header/Header'
import '../TravelInfo/TravelInfo.css'

function TravelInfo() {
    const [getInfo, setGetInfo] = useState(false);
    const [assets, setAssets] = useState(false)
    const apiHost = "https://cdn.contentful.com";
    const params = useParams();
    console.log(params);
    const travelInfo = async () => {
        const response = await fetch(`${apiHost}/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries/${params.id}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`)
        const result = await response.json();
        
        setGetInfo(result);
        console.log("Travel")
        console.log(result);
      };
      useEffect(() => {
        travelInfo();
        getAsset().then((assets)=>{setAssets(assets)})
      }, []);
      if(!getInfo || !assets){
        return <div>Loading...</div>
      }
      function getAssetUrl(assetId){
        const found = assets.items.find((e)=>e.sys.id === assetId)
     /* console.log(assetId) */
      console.log(found)
      if(!found){
      return ""
    
      }
      return "https:" + found.fields.file.url;
      }
      const backgroundUrl = getAssetUrl(getInfo.fields.bgImg.sys.id)
  return (
    <div>
       {/*  <Header /> */}
        <h1>{getInfo.fields.city} in {getInfo.fields.country}</h1>
        <img className='city_bg' src={backgroundUrl} style={{width:"inherit"}} />
      
    </div>
  )
}

export default TravelInfo
