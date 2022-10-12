import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link, NavLink, Navigate } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ManageCountry({ destinations, addDestination, token }) {
  // if (!token) {
  //   return <Navigate to="/unauthorized" />;
  // }
  return (
    <div>
      <div className="createBtn">
        <button>
          <Link to="/managecountry/addcountry">Add Country</Link>
        </button>
        <Link to="/all_countries" className="editBlog" title="Edit a country">
          <EditIcon />
        </Link>
      </div>
      <div className="createBtn">
        <button>
          <Link to="/managecountry/addcountry/addhotel">Add Hotel</Link>
        </button>
        <Link to="/all_hotels" className="editBlog" title="Edit a hotel">
          <EditIcon />
        </Link>
      </div>
      <div className="createBtn">
        <button>
          <Link to="/managecountry/addcountry/addrestaurant">
            Add Restaurant
          </Link>
          <Link
            to="/all_restaurants"
            className="editBlog"
            title="Edit a restaurant"
          >
            <EditIcon />
          </Link>
        </button>
      </div>
      <div className="createBtn">
        <button>
          <Link to="/managecountry/addcountry/addshop">Add Shop</Link>
        </button>
        <Link to="/all_shops" className="editBlog" title="Edit a shop">
          <EditIcon />
        </Link>
      </div>
    </div>
  );
}

export default ManageCountry;
