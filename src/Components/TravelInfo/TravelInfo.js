import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAsset } from "../../controllers/content";
import "../TravelInfo/TravelInfo.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Typography } from "@mui/material";

function TravelInfo() {
  const [getInfo, setGetInfo] = useState(false);
  const [assets, setAssets] = useState(false);
  const [shopping, setShopping] = useState(false);
  const [restaurant, setRestaurant] = useState(false);
  const [hotel, setHotel] = useState(false);
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
  const getHotelData = async () => {
    const response = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries?content_type=hotel&fields.destination.sys.id=${id}&access_token=${process.env.REACT_APP_ACCESS_TOKEN}`
    );
    const result = await response.json();
    console.log("Hotel");
    setHotel(result.items);
    console.log(result.items);
  };
  const getShoppingData = async () => {
    const response = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries?content_type=shopping&fields.destination.sys.id=${id}&access_token=${process.env.REACT_APP_ACCESS_TOKEN}`
    );
    const result = await response.json();
    console.log("Shopping");
    setShopping(result.items);
    console.log(result.items);
  };
  const getRestaurantData = async () => {
    const response = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries?content_type=restaurant&fields.destination.sys.id=${id}&access_token=${process.env.REACT_APP_ACCESS_TOKEN}`
    );
    const result = await response.json();
    console.log("Restaurant");
    setRestaurant(result.items);
    console.log(result.items);
  };
  useEffect(() => {
    getHotelData();
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
          height: "450px",
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
            // textShadow: "2px 2px 2px orange",
            fontSize: "3em",
          }}
        >
          {getInfo.fields.city} in {getInfo.fields.country}
        </h1>
      </Paper>
      <div className="lang">
        <p>Language Spoken: {getInfo.fields.language}</p>
      </div>
      <div className="cityCont">
        <h2 className="aboutCityTitle">
          What to know about {getInfo.fields.country} ({getInfo.fields.city})
        </h2>
        {documentToReactComponents(getInfo.fields.cityInfo)}
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
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </div>
          <Grid
            container
            spacing={2}
            className="hotelGrid"
            // sx={{ width: "50%" }}
          >
            {hotel.map((hotel, index) => {
              const hotelUrl = getAssetUrl(hotel.fields.image.sys.id);
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
                        <h4>{hotel.fields.name}</h4>
                        <a href={hotel.fields.url} target="_blank">
                          Visit
                        </a>
                      </div>
                      <h3>From ${hotel.fields.price}</h3>
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
                        value={hotel.fields.rating}
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
                        ({hotel.fields.review} reviews)
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
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </div>
          <Grid container spacing={2} className="shopGrid">
            {shopping.map((shop, index) => {
              const shoppingUrl = getAssetUrl(shop.fields.image.sys.id);
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
                        <h4>{shop.fields.name}</h4>
                        <a href ={shop.fields.url} target="_blank">
                          Visit
                        </a>
                      </div>
                      <h3>From ${shop.fields.price}</h3>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Rating
                        name="read-only"
                        value={shop.fields.rating}
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
                        ({shop.fields.reviews} reviews)
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
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </div>
          <Grid container spacing={2} className="restGrid">
            {restaurant.map((restaurant, index) => {
              const restaurantUrl = getAssetUrl(restaurant.fields.image.sys.id);
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
                        <h4>{restaurant.fields.name}</h4>
                        <a href={restaurant.fields.url}>Visit</a>
                      </div>
                      <h3>From ${restaurant.fields.price}</h3>
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
                        value={restaurant.fields.rating}
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
                        ({restaurant.fields.reviews} reviews)
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </Container>
  );
}

export default TravelInfo;
