import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAsset } from "../../controllers/content";
import Header from "../Header/Header";
import "./TravelInfo.css";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { Padding } from "@mui/icons-material";
import "../TravelInfo/TravelInfo.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function TravelInfo() {
  const [getInfo, setGetInfo] = useState(false);
  const [assets, setAssets] = useState(false);
  const apiHost = "https://cdn.contentful.com";
  const params = useParams();
  console.log(params);
  const travelInfo = async () => {
    const response = await fetch(
      `${apiHost}/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries/${params.id}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`
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
  }, []);
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
    <div className="infoBgImage">
      <Container>
        <Paper
          elevation={2}
          sx={{
            height: "350px",
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
        </Paper>
        <div className="lang">
          <p>Language Spoken: {getInfo.fields.cityInfo}</p>
        </div>
        <div className="cityInfo">
          {documentToReactComponents(getInfo.fields.cityInfo)}
        </div>
      </Container>
    </div>
  );
}

export default TravelInfo;
