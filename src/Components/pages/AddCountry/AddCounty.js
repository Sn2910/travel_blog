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
  };

  return (
    <div className="addcountry">
      <Container maxWidth="sm" sx={{ background: "#fff" }}>
        <form onSubmit={createCountry} className="addcountryWrap">
          <h2>Create a Destination</h2>

          <div className="country_name">
            <h4>Country:</h4>
            <input type="text" id={"country"} />
          </div>
          <div className="cityName">
            <h4>City:</h4>
            <input type="text" id={"city"} />
          </div>

          <div className="countryBackgroungImg">
            <h4>Background Image:</h4>
            <input type="text" id={"backgroundImage"} />
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
            <input type="text" id={"language"} />
          </div>
          <div className="cords">
            <h4>County cords:</h4>
            <input type="text" id={"countryCoords"} />
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
          <div className="createBtn">
            <button>
              <Link to="/managecountry/addcountry/addhotel">Add Hotel</Link>
            </button>
          </div>
          <div className="createBtn">
            <button>
              <Link to="/managecountry/addcountry/addrestaurant">
                Add Restaurant
              </Link>
            </button>
          </div>
          <div className="createBtn">
            <button>
              <Link to="/managecountry/addcountry/addshop">Add Shop</Link>
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default AddCounty;
