import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link, NavLink, Navigate } from "react-router-dom";
import "./ManageCountry.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ManageCountry({ destinations, addDestination, token }) {
 /*  if (!token) {
    return <Navigate to="/unauthorized" />;
  } */
  return (
    <div className="manageCountryWrap">
      <h1>Country Management Zone</h1>
      <p>Please double check your work before saving!</p>
      <div className="placeCenter">
        <div className="manageCountryBTN">
          
          <div className="link">
            <Link
              to="/all_countries"
              className="manageCountryEditBTN"
              title="List of Countries"
            >
               <button className="createBtn">List of all Countries</button>
             {/*  <EditIcon
                sx={{
                  fontSize: "2.5em",
                  color: "#696969",
                }}
              /> */}
            </Link>
          </div>
        </div>
        <div className="manageCountryBTN">
          
          <div className="link">
            <Link
              to="/all_hotels"
              className="manageCountryEditBTN"
              title="List of hotels"
            >
               <button className="createBtn">List of all Hotels</button>
              {/* <EditIcon
                sx={{
                  fontSize: "2.5em",
                  color: "#696969",
                }}
              /> */}
            </Link>
          </div>
        </div>
        <div className="manageCountryBTN">
        
          <div className="link">
            <Link
              to="/all_shops"
              className="manageCountryEditBTN"
              title="List of Shops"
              
            >
               <button className="createBtn">List of all Shops</button>
             {/*  <EditIcon
                sx={{
                  fontSize: "2.5em",
                  color: "#696969",
                }}
              /> */}
            </Link>
          </div>
        </div>
        <div className="manageCountryBTN">
        
          <div className="link">
            <Link
              to="/all_restaurants"
              className="manageCountryEditBTN"
              title="List of restaurants"
            >
               <button className="createBtn">List of all Restaurants</button>
             {/*  <EditIcon
                sx={{
                  fontSize: "2.5em",
                  color: "#696969",
                }}
              /> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageCountry;
