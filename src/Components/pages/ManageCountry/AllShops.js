import React from "react";
import { Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Link, NavLink, Navigate } from "react-router-dom";
import "./ManageCountry.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AllShops({ shops }) {
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
                  {shop.country}
                  <Link
                    to={`/managecountry/editcountry/${shop.id}`}
                    className="editBlog"
                    title="Edit"
                  >
                    <EditIcon />
                  </Link>
                </Item>
              </Stack>
            </Box>
          </Container>
        );
      })}
    </div>
  );
}
