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

export default function AllShops({ shops, deleteShop }) {
  return (
    <div>
      {shops.map((shop, index) => {
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
                  {shop.name}
                  </div>
                  <div className="listwrapbtn">
                  <Link
                    to={`/manageshop/editshop/${shop.id}`}
                    className="editBlog"
                    title="Edit"
                  >
                     <button className="generalbutton">Edit</button>
                  </Link>
                  <button className="deletebutton" onClick={()=>{
                    deleteShop(shop.id)
                    toast.success('Shops Deleted Successfully', {
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
            <Link to="/manageshop/addshop">Add Shop</Link>
          </button>
    </div>
  );
}
