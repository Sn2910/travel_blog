import React from 'react'
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import { Edit, EditAttributes } from '@material-ui/icons';
import AddCounty from '../AddCountry/AddCounty';
import { Link, NavLink } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function ManageCountry({ destinations,addDestination}) {
    function callAddCountry(){
        <AddCounty />
    }
  return (
    <div>
          {destinations.map((destination,index)=>{
                     return (
                        <Container maxWidth="sm" sx={{ background: "#fff" }}>
        
          <Box sx={{ width: '100%' }}>
              <Stack spacing={2}>
              
              <Item key= {index}>{destination.country}<Edit/></Item>
             
              </Stack>
          </Box>
        
          
    </Container>  
    


                     )
        
                })}
      <div className="createBtn">
              <button><Link to="/managecountry/addcountry">Add Country</Link></button>
          </div>
    </div>
  )
}

export default ManageCountry
