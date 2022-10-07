import React from 'react'
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Link } from 'react-router-dom';




function EditCountry({destinations, editDestination}) {
    
    const { id } = useParams();
  console.log("params ID", id);

  const destination = destinations.find((destination) => {
    return destination.id === parseInt(id);
});
    const editCountry = (e)=>{
     e.preventDefault();
     const {
        country,
        city,
        language,
        countryCoords,
        cityInfo,
        backgroundImgId,
        backgroundImage
    }= e.target;
    console.log(e.target)
    const savedCountry={
        id:id,
        country: country.value,
        city: city.value,
        language: language.value,
        countryCoords: countryCoords.value,
        cityInfo: cityInfo.value,
        backgroundImgId: parseInt(backgroundImgId),
        backgroundImgUrl: backgroundImage.value,
    }
    console.log(cityInfo)
    editDestination(savedCountry)
   
     
    }
    
    return (
        <div className='addcountry'>
            <Container maxWidth="sm" sx={{ background: "#fff" }}>
            <form onSubmit ={editCountry} className="addcountryWrap">
                
                    <h2>Create a Destination</h2>

                    <div className="country_name">
                        <h4>Country:</h4>
                        <input
                            type="text"
                            id={'country'}
                            defaultValue ={destination.country}
                        />
                    </div>
                    <div className='cityName'>
                        <h4>City:</h4>
                        <input
                            type="text"
                            id={'city'}
                            defaultValue ={destination.city}
                        />
                    </div>

                    <div className="countryBackgroungImg">
                        <h4>Background Image:</h4>
                            <input 
                            type="text"
                            id={'backgroundImgId'} 
                            defaultValue ={destination.background_img_id}
                               
                             />    
                    </div>

                    <div className="cityInfoTextArea">
                        <h4>Add City Info</h4>
                        <TextareaAutosize
                            className="textArea"
                            id={'cityInfo'}
                            maxRows={4}
                            aria-label="maximum height"
                            // placeholder="Maximum 10 rows"
                            style={{
                                width: 555,
                                height: 300,
                                fontSize: "1.2em",
                            }}
                            defaultValue ={destination.city_info}
                        />
                    </div>
                    <div className="language">
                        <h4>Language:</h4>
                        <input
                            type="text"
                            id={'language'}
                            defaultValue ={destination.language}
                            
                        />
                    </div>
                    <div className="cords">
                        <h4>County cords:</h4>
                        <input
                            type="text"  
                            id={'countryCoords' }
                            defaultValue ={destination.country_coords}
                        />
                        <p className="cordsInfo">
                            <em>generate Country Coordinates <a href='https://www.image-map.net/'>here</a>!</em>
                        </p>
                    </div>

                    <div className="createBtn">
                        <button>Save</button>
    
                    </div>
                    
                  
                </form>
            </Container>
        </div>
    )
}

export default EditCountry
