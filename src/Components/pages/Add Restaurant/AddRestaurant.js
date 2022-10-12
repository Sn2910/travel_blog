import React from "react";
import { useState } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Container from "@mui/material/Container";
import {Link} from "react-router-dom"
import EditIcon from '@mui/icons-material/Edit';

function AddRestaurant({ destinations, addRestaurant }) {
  const [value, setValue] = useState("");

  const createRestaurant = (e) => {
    e.preventDefault();
    const {
      name,
      description,
      price,
      url,
      rating,
      review,
      destination,
      imageID,
      backgroundImage,
    } = e.target;

    const newRestaurant = {
      name: name.value,
      description: description.value,
      price: price.value,
      url: url.value,
      rating: rating.value,
      reviews: review.value,
      destinationID: destination.value,
      imageID: imageID,
      imageUrl: backgroundImage.value,
    };

    console.log(destination.value);

    addRestaurant(newRestaurant);
  };

  return (
    <div className="addrestaurant">
      <Container maxWidth="sm" sx={{ background: "#fff" }}>
        <form onSubmit={createRestaurant} className="addhotelWrap">
          <h2>Add Restaurant Details</h2>
         

          <div className="hotel_name">
            <h4>Name:</h4>
            <input type="text" id="name"/>
          </div>
          <div className="destination_dropdown">
            <select id={'destination'}>
              {destinations.map((destination,index) => (
                <option key= {index} value={destination.id}>
                  {destination.country}
                </option>
              ))}
            </select>
          </div>
          <div className="hotel_desc">
            <h4>Description:</h4>
            <TextareaAutosize
              className="textArea"
              maxRows={4}
              aria-label="maximum height"
              // placeholder="Maximum 10 rows"
              id={'description'}
              style={{
                width: 555,
                height: 300,
                fontSize: "1.2em",
              }}
            />
          </div>
          <div className="hotel_price">
            <h4>Price:</h4>
            <input type="number" id={'price'} />
          </div>
          <div className="hotel_url">
            <h4> Restaurant Url:</h4>
            <input type="text" id={'url'} />
          </div>
          <div className="hotel_rating">
            <h4>Rating:</h4>
            <input type="number" id={'rating'} />
          </div>
          <div className="hotel_review">
            <h4>Review:</h4>
            <input type="number" id={'review'} />
          </div>

          <div className="hotelBackgroungImg">
            <h4>Restaurant Image:</h4>
            <input type="text" id={'backgroundImage'} />
          </div>

          <div className="createBtn">
            <button type="submit">Create Restaurant</button>
          </div>
         
        
        </form>
      </Container>
    </div>
  );
}

export default AddRestaurant;
