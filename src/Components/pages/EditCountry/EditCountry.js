import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useState } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EditCountry({ destinations, editDestination }) {

  // "" is used if assets is a String, null is to be used if assets is an Object, [] can be used if its an array, if you don't want to initialize use useState()
  const { id } = useParams();
  //   console.log("params ID", id); // should output 'params ID1'

  /**
   * this will only be used if you implement a dropdown list to select a asset(id) or limit your options
   */

  const destination = destinations.find((destination) => {
    return destination.id === parseInt(id);
  });

  const editCountry = (e) => {
    e.preventDefault();
    const {
      country,
      city,
      language,
      countryCoords,
      cityInfo,
      backgroundImgField,
    } = e.target;

    console.log(destination.background_img_id);

    const savedCountry = {
      id: id,
      country: country.value,
      city: city.value,
      language: language.value,
      countryCoords: countryCoords.value,
      cityInfo: cityInfo.value,
      backgroundImgId: destination.background_img_id
        ? backgroundImgField.value
        : null,
      backgroundImgUrl:
        destination.background_img_id === null ? backgroundImgField.value : "",
    };
    editDestination(savedCountry);
    toast.success('Country Edited Successfully', {
      position: toast.POSITION.TOP_RIGHT,
      className: 'toast-message'
  });
  };

  return (
    <div className="addcountry">
      <Container maxWidth="sm" sx={{ background: "#fff" }}>
        <form onSubmit={editCountry} className="addcountryWrap">
          <h2>Edit Destination</h2>

          <div className="country_name">
            <h4>Country:</h4>
            <input
              type="text"
              id={"country"}
              defaultValue={destination.country}
              placeholder = "Add Country Name"
              required
            />
          </div>
          <div className="cityName">
            <h4>City:</h4>
            <input 
            type="text" 
            id={"city"} 
            defaultValue={destination.city} 
            placeholder = "Add City Name"
            required
            />
          </div>
          <div className="countryBackgroungImg">
            <h4>
              {destination.background_img_id
                ? "Background Image ID:"
                : "Background Image Url:"}
            </h4>
            <input
              type={destination.background_img_id ? "number" : "text"}
              id="backgroundImgField"
              defaultValue={
                destination.background_img_id
                  ? destination.background_img_id
                  : destination.background_img_url
              }
              placeholder = {destination.background_img_id
                ? "Add Destination Id"
                : "Add Destination Url"}
                required
            />
          </div>
          <div className="cityInfoTextArea">
            <h4>Add City Info</h4>
            <TextareaAutosize
              className="textArea"
              id={"cityInfo"}
              maxRows={4}
              aria-label="maximum height"
              placeholder = "Add City Info"
              style={{
                width: 555,
                height: 300,
                fontSize: "1.2em",
              }}
              defaultValue={destination.city_info}
            />
          </div>
          <div className="language">
            <h4>Language:</h4>
            <input
              type="text"
              id={"language"}
              defaultValue={destination.language}
              placeholder = "Add Language Spoken"
            />
          </div>
          <div className="cords">
            <h4>County cords:</h4>
            <input
              type="text"
              id={"countryCoords"}
              defaultValue={destination.country_coords}
              placeholder = "Add Country Coords"
              required
            />
            <p className="cordsInfo">
              <em>
                generate Country Coordinates{" "}
                <a href="https://www.image-map.net/" target="_blank" rel="noopener noreferrer">here</a>!
              </em>
            </p>
          </div>

          <div className="createBtn">
            <button type="submit">Save</button>
            <ToastContainer />
          </div>
        </form>
      </Container>
    </div>
  );
}

export default EditCountry;
