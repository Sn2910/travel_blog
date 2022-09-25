import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAsset } from "../../controllers/api";
import "../TravelInfo/TravelInfo.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Typography } from "@mui/material";
import {getDestinations,getDestinationsById} from '../../controllers/api'


function TravelInfo() {
  let backgroundUrl;
  const [getInfo, setGetInfo] = useState("");
  const [getDestinationsArr, setGetDestinationsArr] = useState([]);
  const [assets, setAssets] = useState("");
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(-1)
  
  const { id } = useParams();

  const travelInfo = async () => {
  
    const countryInfo = await getDestinationsById(id)
    console.log("countyInfo")
    console.log(countryInfo);
    setGetInfo(countryInfo);
    
  };
  
  useEffect(() => {
     getDestinations().then((destinations) => {
      const destinationIndex =destinations.findIndex((destination)=>destination.id === parseInt(id))
      setGetDestinationsArr(destinations);
      setSelectedCountryIndex(destinationIndex)
      console.log(destinations)
    }); 
    getAsset().then((assets) => {
      setAssets(assets);
    });
    travelInfo();
   
   
  }, [id]);
  if (!getInfo || !assets || !getDestinationsArr.length || selectedCountryIndex < 0)  {
    return <div>Loading...</div>;
  }
  function getAssetUrl(assetId) {
    const found = assets.find((e) => e.id === assetId);
    console.log(assetId)
    console.log(found.img_url);
    if (!found) {
      return "";
    }
    return found.img_url;
  }
  if (getDestinationsArr[selectedCountryIndex].background_img_url) {

     backgroundUrl = getDestinationsArr[selectedCountryIndex].background_img_url;
  } else {
     backgroundUrl = getAssetUrl(getDestinationsArr[selectedCountryIndex].background_img_id);
  }


  return (
    <Container
      className="cityInfoContent"
      sx={{
        paddingX: "0",
      }}
    >
      <Paper
        elevation={7}
        className="infoBgImage"
        style={{
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
            // textAlign: "center",
            display: "flex",
            // flexDirection: "column",
            justifyContent: "flex-end",
            paddingRight: "5%",
            paddingTop: "2%",
            height: "inherit",
            width: "inherit",
            color: "#fff",
            textShadow: "2px 2px 2px orange",
            fontSize: "3em",
          }}
        >
          {getDestinationsArr[selectedCountryIndex].city} in {getDestinationsArr[selectedCountryIndex].country}
        </h1>
      </Paper>
      <div className="lang">
        <p>Language Spoken: {getDestinationsArr[selectedCountryIndex].language}</p>
      </div>
      <div className="cityCont">
        <h2 className="aboutCityTitle">
          What to know about {getDestinationsArr[selectedCountryIndex].country} ({getDestinationsArr[selectedCountryIndex].city})
        </h2>
        {getDestinationsArr.city_info}
      </div>
      <div>
        <h2>Affordable Hotels</h2>
        <div className="hotelFlex">
          <div className="hotelCont">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </div>
          <Grid
            container
            spacing={2}
            className="hotelGrid"
            // sx={{ width: "50%" }}
          >
            {getInfo.hotels.map((hotel, index) => {
              const hotelUrl = getAssetUrl(hotel.image_id);
              return (
                <Grid item key={index} xs={6}>
                  <Paper
                    elevation={7}
                    key={index}
                    sx={{
                      height: "290px",
                      width: "100%",
                      padding: "5px",
                    }}
                  >
                    <img src={hotelUrl} alt="" width="100%" height="70%" />
                    <Box
                      sx={{
                        padding: "5px 0",
                      }}
                    >
                      <div className="visit">
                        <h4>{hotel.name}</h4>
                        <a href={hotel.url} target="_blank">
                          Visit
                        </a>
                      </div>
                      <h3>From ${hotel.price}</h3>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "5px 0",
                      }}
                    >
                      <Rating
                        name="read-only"
                        value={hotel.rating}
                        precision={0.5}
                        size="small"
                        readOnly
                      />
                      <Typography>4.5</Typography>
                      <Typography
                        sx={{
                          marginLeft: "20px",
                        }}
                      >
                        ({hotel.reviews} reviews)
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
     {/*  <div>
        <h2>Shopping Centers</h2>
        <div className="shopFlex">
          <div className="shopCont">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance.
          </div>
          <Grid container spacing={2} className="shopGrid">
            {shopping.map((shop, index) => {
              const shoppingUrl = getAssetUrl(shop.image_id);
              return (
                <Grid item key={index} xs={6}>
                  <Paper
                    elevation={7}
                    key={index}
                    sx={{
                      height: "290px",
                      width: "100%",
                      padding: "5px",
                    }}
                  >
                    <img src={shoppingUrl} alt="" width="100%" height="70%" />
                    <Box
                      sx={{
                        padding: "5px 0",
                      }}
                    >
                      <div className="visit">
                        <h4>{shop.name}</h4>
                        <a href={shop.url} target="_blank">
                          Visit
                        </a>
                      </div>
                      <h3>From ${shop.price}</h3>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Rating
                        name="read-only"
                        value={shop.rating}
                        precision={0.5}
                        size="small"
                        readOnly
                      />
                      <Typography>4.5</Typography>
                      <Typography
                        sx={{
                          marginLeft: "20px",
                        }}
                      >
                        ({shop.reviews} reviews)
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
      <div>
        <h2>Best Restaurants</h2>
        <div className="restFlex">
          <div className="restCont">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </div>
          <Grid container spacing={2} className="restGrid">
            {restaurant.map((restaurant, index) => {
              const restaurantUrl = getAssetUrl(restaurant.image_id);
              return (
                <Grid item key={index} xs={6}>
                  <Paper
                    elevation={7}
                    key={index}
                    sx={{
                      height: "290px",
                      width: "100%",
                      padding: "5px",
                    }}
                  >
                    <img src={restaurantUrl} alt="" width="100%" height="70%" />
                    <Box
                      sx={{
                        padding: "5px 0",
                      }}
                    >
                      <div className="visit">
                        <h4>{restaurant.name}</h4>
                        <a href={restaurant.url} target="_blank">
                          Visit
                        </a>
                      </div>
                      <h3>From ${restaurant.price}</h3>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "5px 0",
                      }}
                    >
                      <Rating
                        name="read-only"
                        value={restaurant.rating}
                        precision={0.5}
                        size="small"
                        readOnly
                      />
                      <Typography>4.5</Typography>
                      <Typography
                        sx={{
                          marginLeft: "20px",
                        }}
                      >
                        ({restaurant.reviews} reviews)
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div> */}
    </Container>
  );
}

export default TravelInfo;
