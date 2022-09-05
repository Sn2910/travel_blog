import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';


function About() {
  return (
    <Container>
      
       <Box
      sx={{
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        height:'65vh'
      
         
      
      }}
    >
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, tempora facilis velit praesentium, voluptates quia voluptatem nihil cum, quisquam fuga repellat porro consequuntur obcaecati provident quo reprehenderit accusamus aspernatur debitis.</p>
     
       
      
    
    </Box> 
    </Container>
  )
}

export default About
