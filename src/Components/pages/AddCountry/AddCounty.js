import React from 'react'
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useState } from 'react';

function AddCounty() {
    const [countryTitle, setCountryTitle] = useState("")
    const [cityName, setCityName] = useState("")
    const [backgroundImage, setBackgroundImage] = useState("")
    const [cityInfo, setCityInfo] = useState("")
    const [language, setLanguage] = useState("")
    const [countryCoords, setCountryCoords] = useState("")
    const addCountry = ()=>{
        
    }
    return (
        <div className='addcountry'>
            <Container maxWidth="sm" sx={{ background: "#fff" }}>
                <div className="addcountryWrap">
                    <h2>Create a Destination</h2>

                    <div className="countryName">
                        <h4>Country:</h4>
                        <input
                            type="text"
                            value={countryTitle}
                            onChange={(event) => setCountryTitle(event.target.value)}
                        />
                    </div>
                    <div className='cityName'>
                        <h4>City:</h4>
                        <input
                            type="text"
                            value ={cityName}
                            onChange={(event) => setCityName(event.target.value)}
                        />
                    </div>

                    <div className="countryBackgroungImg">
                        <h4>Background Image:</h4>
                            <input 
                            type="text"
                            value ={backgroundImage}
                            onChange={(event) => setBackgroundImage(event.target.value)}
                             />    
                    </div>

                    <div className="cityInfoTextArea">
                        <h4>Add City Info</h4>
                        <TextareaAutosize
                            className="textArea"
                            maxRows={4}
                            aria-label="maximum height"
                            // placeholder="Maximum 10 rows"
                            value ={cityInfo}
                            onChange={(event) => setCityInfo(event.target.value)}
                            style={{
                                width: 555,
                                height: 300,
                                fontSize: "1.2em",
                            }}
                        />
                    </div>
                    <div className="language">
                        <h4>Language:</h4>
                        <input
                            type="text"
                            value ={language}
                            onChange={(event) => setLanguage(event.target.value)}

                        />
                    </div>
                    <div className="language">
                        <h4>County cords:</h4>
                        <input
                            type="text"
                            value ={countryCoords}
                            onChange={(event) => setCountryCoords(event.target.value)}
                        />
                        <p className="cordsInfo">
                            <em>generate Country Coordinates <a href='https://www.image-map.net/'>here</a>!</em>
                        </p>
                    </div>

                    <div className="createBtn">
                        <button onClick={addCountry}>Create</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AddCounty
