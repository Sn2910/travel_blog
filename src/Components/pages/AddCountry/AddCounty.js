import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Link } from "react-router-dom";

function AddCounty({ addDestination, destinations }) {

  const createCountry = (e) => {
    e.preventDefault();
    const {
      country,
      city,
      language,
      countryCoords,
      cityInfo,
      backgroundImgId,
      backgroundImage,
    } = e.target;

    /* if (
      destinations
        .map((destination) => destination.country === country)
        .length() > 0
    )
      return; */

    const newCountry = {
      country: country.value,
      city: city.value,
      language: language.value,
      countryCoords: countryCoords.value,
      cityInfo: cityInfo.value,
      backgroundImgId: backgroundImgId,
      backgroundImgUrl: backgroundImage.value,
    };
    console.log(country);
    addDestination(newCountry);
    alert("Form Submitted Successfully")
  };

  return (
    <div className="addcountry">
      <Container maxWidth="sm" sx={{ background: "#fff" }}>
        <form onSubmit={createCountry} className="addcountryWrap">
          <h2>Create a Destination</h2>

          <div className="country_name">
            <h4>Country:</h4>
            <input type="text" id={"country"} required/>
          </div>
          <div className="cityName">
            <h4>City:</h4>
            <input type="text" id={"city"} />
          </div>

          <div className="countryBackgroungImg">
            <h4>Background Image Url:</h4>
            <input type="text" id={"backgroundImage"} required/>
          </div>

          <div className="cityInfoTextArea">
            <h4>Add City Info</h4>
            <TextareaAutosize
              className="textArea"
              id={"cityInfo"}
              maxRows={4}
              aria-label="maximum height"
              // placeholder="Maximum 10 rows"
              style={{
                width: 555,
                height: 300,
                fontSize: "1.2em",
              }}
            />
          </div>
          <div className="language">
            <h4>Language:</h4>
            <input type="text" id={"language"} required />
          </div>
          <div className="cords">
            <h4>County cords:</h4>
            <input type="text" id={"countryCoords"} required/>
            <p className="cordsInfo">
              <em>
                generate Country Coordinates{" "}
                <a href="https://www.image-map.net/">here</a>!
              </em>
            </p>
          </div>

          <div className="createBtn">
            <button>Create New Destination</button>
          </div>
        
        </form>
      </Container>
    </div>
  );
}

export default AddCounty;
