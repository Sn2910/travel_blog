import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAsset } from "../../controllers/content";
import Header from "../Header/Header";
import "../TravelInfo/TravelInfo.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function TravelInfo() {
  const [getInfo, setGetInfo] = useState(false);
  const [assets, setAssets] = useState(false);
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
  useEffect(() => {
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
          <h2></h2>
        </div>
      </div>
    </div>
  );
}

export default TravelInfo;
