import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  {getAsset} from '../../controllers/content'
import '../TravelInfo/TravelInfo.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function TravelInfo() {
    const [getInfo, setGetInfo] = useState(false);
    const [assets, setAssets] = useState(false)
    const apiHost = "https://cdn.contentful.com";
    const {id} = useParams();
 
    const travelInfo = async () => {
        const response = await fetch(`${apiHost}/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries/${id}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`)
        const result = await response.json();
        
        setGetInfo(result);
        console.log("Travel")
        console.log(result);
      };
      useEffect(() => {
        travelInfo();
        getAsset().then((assets)=>{setAssets(assets)})
      }, [id]);
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
    
        <h1>{getInfo.fields.city} in {getInfo.fields.country}</h1>
        <img className='city_bg' src={backgroundUrl} style={{width:"inherit"}} />
        <div>
                {documentToReactComponents(getInfo.fields.cityInfo)  }
            </div>
      
    </div>
  )
}

export default TravelInfo
