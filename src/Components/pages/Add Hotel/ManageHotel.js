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

function ManageHotel({hotels}) {
  // if (!token) {
  //   return <Navigate to="/unauthorized" />;
  // }
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
                  <Link to={`/managehotel/edithotel/${hotel.id}`} className="editBlog">
                    <EditIcon />
                  </Link>
                 
                </Item>
              </Stack>
            </Box>
          </Container>
        );
      })}
      <div className="createBtn">
            <button>
              <Link to="/managehotel/addhotel">Add Hotel</Link>
            </button>
            
          </div>
         
         
    </div>
  );
}

export default ManageHotel;
