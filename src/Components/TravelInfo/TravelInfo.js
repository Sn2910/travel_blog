import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAsset } from "../../controllers/content";
import "../TravelInfo/TravelInfo.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function TravelInfo() {
  const [getInfo, setGetInfo] = useState(false);
  const [assets, setAssets] = useState(false);
  const [shopping, setShopping] = useState(false);
  const [restaurant, setRestaurant] = useState(false);
  const apiHost = "https://cdn.contentful.com";
  const { id } = useParams();

  const travelInfo = async () => {
    const response = await fetch(
      `${apiHost}/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries/${id}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`
    );
    const result = await response.json();

    setGetInfo(result);
    console.log("Travel");
    console.log(result);
  };
  const getShoppingData = async () => {
    const response = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries?content_type=shopping&fields.destination.sys.id=${id}&access_token=${process.env.REACT_APP_ACCESS_TOKEN}`
    );
    const result = await response.json();
    console.log("Shopping");
    setShopping(result.items);
    console.log(result.items);
    /* 
    const destId1 ='3nZZzJ6iJ17V2wCrWySzxN'
    console.log(result.items.filter((item)=>item.sys.contentType.sys.id === 'shopping' && item.fields.destination.sys.id === destId1))  */
  };
  const getRestaurantData = async () => {
    const response = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries?content_type=restaurant&fields.destination.sys.id=${id}&access_token=${process.env.REACT_APP_ACCESS_TOKEN}`
    );
    const result = await response.json();
    console.log("Restaurant");
    setRestaurant(result.items);
    console.log(result.items);
    /* 
  const destId1 ='3nZZzJ6iJ17V2wCrWySzxN'
  console.log(result.items.filter((item)=>item.sys.contentType.sys.id === 'shopping' && item.fields.destination.sys.id === destId1))  */
  };
  useEffect(() => {
    getShoppingData();
    getRestaurantData();
    travelInfo();
    getAsset().then((assets) => {
      setAssets(assets);
    });
  }, [id]);
  if (!getInfo || !assets) {
    return <div>Loading...</div>;
  }
  function getAssetUrl(assetId) {
    const found = assets.items.find((e) => e.sys.id === assetId);
    /* console.log(assetId) */
    console.log(found);
    if (!found) {
      return "";
    }
    return "https:" + found.fields.file.url;
  }
  const backgroundUrl = getAssetUrl(getInfo.fields.bgImg.sys.id);
  const backgroundUrl1 = getAssetUrl(getInfo.fields.bgImg.sys.id);

  return (
    <div className="cityInfoContent">
      <div
        className="infoBgImage"
        style={{
          height: "550px",
          backgroundImage: `url(${backgroundUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "0px",
          objectFit: "cover",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "inherit",
            width: "inherit",
            color: "#fff",
            textShadow: "2px 2px 2px orange",
            fontSize: "3em",
          }}
        >
          {getInfo.fields.city} in {getInfo.fields.country}
        </h1>
      </div>
      <div className="lang">
        <p>Language Spoken: {getInfo.fields.language}</p>
      </div>
      <div className="cityCont">
        <h2>
          What to know about {getInfo.fields.country} ({getInfo.fields.city})
        </h2>
        {documentToReactComponents(getInfo.fields.cityInfo)}
        <div>
          <h2>Best Restaurants</h2>
        </div>
        <div>
          <h2>Shopping Centers</h2>
        </div>
        <div>
          <h2>Affordable Hotels</h2>
        </div>
      </div>
      <Grid container className="shopping">
        {shopping.map((shop, index) => {
          const shoppingUrl = getAssetUrl(shop.fields.image.sys.id);
          return (
            <Grid item spacing={5}>
              <Paper elevation={7} key={index}>
                <h1>{shop.fields.name}</h1>
                <img src={shoppingUrl} />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <div className="restaurant">
        {restaurant.map((bistro, index) => {
          return <div key={index}>{bistro.fields.name}</div>;
        })}
      </div>
    </div>
  );
}

export default TravelInfo;
