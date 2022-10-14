import React from "react";
import { Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
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
                  {hotel.name} 
                  <Link
                    to={`/managehotel/edithotel/${hotel.id}`}
                    className="editBlog"
                    title="Edit"
                  >
                    <EditIcon />
                    
                  </Link>
                  <DeleteIcon onClick={()=>{
                    deleteHotel(hotel.id)
                    toast.success('Hotel Details Deleted Successfully', {
                      position: toast.POSITION.TOP_RIGHT,
                      className: 'toast-message'
                  });       
                    }}/>
                     <ToastContainer />
                </Item>
              </Stack>
            </Box>
          </Container>
        );
      })}
    </div>
  );
}
