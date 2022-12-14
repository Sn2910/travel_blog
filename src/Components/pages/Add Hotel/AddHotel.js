import React from "react";
import { useState } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Container from "@mui/material/Container";
import {Link} from "react-router-dom"
import EditIcon from '@mui/icons-material/Edit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddHotel({ destinations, addHotel }) {
  const [value, setValue] = useState("");

  const createHotel = (e) => {
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

    const newHotel = {
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

    addHotel(newHotel);
    toast.success('Hotel Details Added Successfully', {
      position: toast.POSITION.TOP_RIGHT,
      className: 'toast-message'
  });
  };

  return (
    <div className="addhotel">
      <Container maxWidth="sm" sx={{ background: "#fff" }}>
        <form onSubmit={createHotel} className="addhotelWrap">
          <h2>Add Hotel Details</h2>
         

          <div className="hotel_name">
            <h4>Name:</h4>
            <input 
            type="text" 
            id="name"
            placeholder="Enter Hotel Name"
            required
            />
          </div>
          <div className="destination_dropdown">
            <select id={'destination'}>
              {destinations.map((destination) => (
                <option value={destination.id}>
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
              placeholder="Enter Hotel Description"
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
            <input 
            type="number" 
            id={'price'} 
            placeholder="Enter Starting Price"
            required
            />
          </div>
          <div className="hotel_url">
            <h4> Hotel Url:</h4>
            <input 
            type="text" 
            id={'url'} 
            placeholder="Enter Hotel Website"
            required
            />
          </div>
          <div className="hotel_rating">
            <h4>Rating:</h4>
            <input 
            type="number"
             id={'rating'} 
             placeholder="Enter Rating"
             required
             />
          </div>
          <div className="hotel_review">
            <h4>Review:</h4>
            <input 
            type="number" 
            id={'review'} 
            placeholder="Enter Reviews"
            required
            />
          </div>

          <div className="hotelBackgroungImg">
            <h4>Hotel Image:</h4>
            <input 
            type="text" 
            id={'backgroundImage'}
            placeholder="Paste Image Url"
            required 
            />
          </div>

          <div className="createBtn">
            <button type="submit">Create Hotel</button>
            <ToastContainer />
          </div>
         
        
        </form>
      </Container>
    </div>
  );
}

export default AddHotel;
