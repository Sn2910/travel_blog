import React from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditShop({editShop,destinations,shops}) {
  const { id } = useParams();
  console.log(id)
  const shop = shops.find((shop) => {
    return shop.id === parseInt(id);
  });

  const editdestinationShop = (e) => {
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

    const newShop = {
      id:id,
      name: name.value,
      description: description.value,
      price: price.value,
      url: url.value,
      rating: rating.value,
      reviews: review.value,
      destinationID: destination.value,
      imageID: shop.image_id ? backgroundImgField.value :null,
      imageUrl: shop.image_id === null ? backgroundImgField.value : "",
    };

    editShop(newShop);
    toast.success('Shop Details Edited Successfully', {
      position: toast.POSITION.TOP_RIGHT,
      className: 'toast-message'
  });
  };

  return (
  
    <div className="addshop">
      <Container maxWidth="sm" sx={{ background: "#fff" }}>
        <form onSubmit={editdestinationShop} className="addshopWrap">
          <h2>Edit Shop Details</h2>

          <div className="shop_name">
            <h4>Name:</h4>
            <input 
            type="text"
             id="name"
             defaultValue={shop.name}
             placeholder="Add Shop Name"
             required
             />
          </div>
          <div className="destination_dropdown">
            <select id={'destination'} defaultValue ={shop.destination_id}>
              {destinations.map((destination) => (
                <option value={destination.id}>
                  {destination.country}
                </option>
              ))}
            </select>
          </div>
          <div className="shop_desc">
            <h4>Description:</h4>
            <TextareaAutosize
              className="textArea"
              maxRows={4}
              aria-label="maximum height"
              placeholder="Add Shop Description"
              // placeholder="Maximum 10 rows"
              id={'description'}
              style={{
                width: 555,
                height: 300,
                fontSize: "1.2em",
              }}
              defaultValue={shop.description}
            />
          </div>
          <div className="shop_price">
            <h4>Price:</h4>
            <input 
            type="number" 
            id={'price'} 
            defaultValue={shop.price}
            placeholder =" Enter Starting Price" 
            required
            />
          </div>
          <div className="shop_url">
            <h4>Url:</h4>
            <input 
            type="text" 
            id={'url'} 
            defaultValue={shop.url}
            placeholder ="Add Shop Website" 
            required 
            />
          </div>
          <div className="shop_rating">
            <h4>Rating:</h4>
            <input 
            type="number"
             id={'rating'} 
             defaultValue={shop.rating}
             placeholder ="Add Rating" 
             required
             />
          </div>
          <div className="shop_review">
            <h4>Review:</h4>
            <input 
            type="number" 
            id={'review'}
            defaultValue={shop.reviews}
            placeholder ="Add Review" 
            required
            />
          </div>

          <div className="shopBackgroungImg">
            <h4>{shop.image_id ? "Shop Image Id": "Shop Image Url"}</h4>
            <input 
            type={shop.image_id ? "number": "text"}
             id={'backgroundImgField'} 
             defaultValue={shop.image_id ? shop.image_id : shop.image_url}
             placeholder ="Add the Image Url" 
             required
             />
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

export default EditShop;
