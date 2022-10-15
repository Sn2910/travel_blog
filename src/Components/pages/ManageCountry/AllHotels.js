import React from "react";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Link, NavLink, Navigate } from "react-router-dom";
import "./ManageCountry.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AllHotels({ hotels,deleteHotel }) {
  return (
    <div>
      {hotels.map((hotel, index) => {
        return (
          <Container
            key={`container_${index}`}
            maxWidth="sm"
            sx={{ background: "#fff" }}
          >
            <Box sx={{ width: "100%" }}>
              <Stack spacing={2}>
                <Item key={`item_${index}`}>
                <div className="listflexcontainer">
                  <div className="listflex">
                  {hotel.name} 
                  </div>
                  <div className="listwrapbtn">
                  <Link
                    to={`/managehotel/edithotel/${hotel.id}`}
                    className="editBlog"
                    title="Edit"
                  >
                    <button className="generalbutton">Edit</button>
                    
                  </Link>
                  <button className="deletebutton" onClick={()=>{
                    deleteHotel(hotel.id)
                    toast.success('Hotel Details Deleted Successfully', {
                      position: toast.POSITION.TOP_RIGHT,
                      className: 'toast-message'
                  });       
                    }}>Delete</button>
                     </div>
                    </div>
                     <ToastContainer />
                </Item>
              </Stack>
            </Box>
          </Container>
        );
      })}
          <button className="generalbutton">
            <Link to="/managehotel/addhotel">Add Hotel</Link>
          </button>
    </div>
  );
}
