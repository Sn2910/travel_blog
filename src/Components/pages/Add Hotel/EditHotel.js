import React from "react";
import { useState } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";

function EditHotel({editHotel,destinations,hotels}) {
  const { id } = useParams();
  console.log(id)
  const [value, setValue] = useState("");
  const hotel = hotels.find((hotel) => {
    return hotel.id === parseInt(id);
  });

  const editdestinationHotel = (e) => {
    e.preventDefault();
    const {
      name,
      description,
      price,
      url,
      rating,
      review,
      destination,
      backgroundImgField,
    } = e.target;

    const newHotel = {
      name: name.value,
      description: description.value,
      price: price.value,
      url: url.value,
      rating: rating.value,
      reviews: review.value,
      destinationID: destination.value,
      imageID: hotel.image_id ? backgroundImgField.value :null,
      imageUrl: hotel.image_id === null ? backgroundImgField.value : "",
    };

    editHotel(newHotel);
  };

  return (
  
    <div className="addhotel">
      <Container maxWidth="sm" sx={{ background: "#fff" }}>
        <form onSubmit={editdestinationHotel} className="addhotelWrap">
          <h2>Edit Hotel Details</h2>

          <div className="hotel_name">
            <h4>Name:</h4>
            <input 
            type="text"
             id="name"
             defaultValue={hotel.name}
             
             />
          </div>
          <div className="destination_dropdown">
            <select id={'destination'} defaultValue ={hotel.destination_id}>
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
              // placeholder="Maximum 10 rows"
              id={'description'}
              style={{
                width: 555,
                height: 300,
                fontSize: "1.2em",
              }}
              defaultValue={hotel.description}
            />
          </div>
          <div className="hotel_price">
            <h4>Price:</h4>
            <input 
            type="number" 
            id={'price'} 
            defaultValue={hotel.price}
            />
          </div>
          <div className="hotel_url">
            <h4>Url:</h4>
            <input 
            type="text" 
            id={'url'} 
            defaultValue={hotel.url}
            />
          </div>
          <div className="hotel_rating">
            <h4>Rating:</h4>
            <input 
            type="number"
             id={'rating'} 
             defaultValue={hotel.rating}
             />
          </div>
          <div className="hotel_review">
            <h4>Review:</h4>
            <input 
            type="number" 
            id={'review'}
            defaultValue={hotel.reviews}
            />
          </div>

          <div className="hotelBackgroungImg">
            <h4>{hotel.image_id ? "Hotel Image Id": "Hotel Image Url"}</h4>
            <input 
            type={hotel.image_id ? "number": "text"}
             id={'backgroundImgField'} 
             defaultValue={hotel.image_id ? hotel.image_id : hotel.image_url}
             />
          </div>

          <div className="createBtn">
            <button type="submit">Save</button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default EditHotel;
