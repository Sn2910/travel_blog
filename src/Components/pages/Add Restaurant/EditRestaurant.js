import React from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";

function EditRestaurant({editRestaurant,destinations,restaurants}) {
  const { id } = useParams();
  console.log(id)
  const restaurant = restaurants.find((restaurant) => {
    return restaurant.id === parseInt(id);
  });

  const editdestinationRestaurant = (e) => {
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

    const newRestaurant = {
      id:id,
      name: name.value,
      description: description.value,
      price: price.value,
      url: url.value,
      rating: rating.value,
      reviews: review.value,
      destinationID: destination.value,
      imageID: restaurant.image_id ? backgroundImgField.value :null,
      imageUrl: restaurant.image_id === null ? backgroundImgField.value : "",
    };

    editRestaurant(newRestaurant);
  };

  return (
  
    <div className="addrestaurant">
      <Container maxWidth="sm" sx={{ background: "#fff" }}>
        <form onSubmit={editdestinationRestaurant} className="addrestaurantWrap">
          <h2>Edit Restaurant Details</h2>

          <div className="restaurant_name">
            <h4>Name:</h4>
            <input 
            type="text"
             id="name"
             defaultValue={restaurant.name}
             
             />
          </div>
          <div className="destination_dropdown">
            <select id={'destination'} defaultValue ={restaurant.destination_id}>
              {destinations.map((destination) => (
                <option value={destination.id}>
                  {destination.country}
                </option>
              ))}
            </select>
          </div>
          <div className="restaurant_desc">
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
              defaultValue={restaurant.description}
            />
          </div>
          <div className="restaurant_price">
            <h4>Price:</h4>
            <input 
            type="number" 
            id={'price'} 
            defaultValue={restaurant.price}
            />
          </div>
          <div className="restaurant_url">
            <h4>Url:</h4>
            <input 
            type="text" 
            id={'url'} 
            defaultValue={restaurant.url}
            />
          </div>
          <div className="restaurant_rating">
            <h4>Rating:</h4>
            <input 
            type="number"
             id={'rating'} 
             defaultValue={restaurant.rating}
             />
          </div>
          <div className="restaurant_review">
            <h4>Review:</h4>
            <input 
            type="number" 
            id={'review'}
            defaultValue={restaurant.reviews}
            />
          </div>

          <div className="restaurantBackgroungImg">
            <h4>{restaurant.image_id ? "Restaurant Image Id": "Restaurant Image Url"}</h4>
            <input 
            type={restaurant.image_id ? "number": "text"}
             id={'backgroundImgField'} 
             defaultValue={restaurant.image_id ? restaurant.image_id : restaurant.image_url}
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

export default EditRestaurant;
