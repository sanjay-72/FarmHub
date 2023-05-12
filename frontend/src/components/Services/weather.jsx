import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import axios from "axios";


const Weather = ({ weatherDetails, setWeatherDetails, place,setPlace,weather }) => {

    

    if (!weatherDetails) return null;
    return (
        <Container sx={{ mt: { xs: 6, sm: 8 }, textAlign: 'center', padding: "5vmax" }}>
            <Box display="flex" alignItems='center' justifyContent='center'>
                <TextField type="text" placeholder="Search" value={place} onChange={(e) => setPlace(e.target.value)} />
                <Button onClick={() => weather.search()} size='large' sx={{ textTransform: 'none', marginLeft: "2rem", padding:".9rem" }} color='tertiary' variant='contained'>
                Search
            </Button>
            </Box>
            <Typography variant="h2" color="primary" fontFamily="Roboto" fontWeight="bold" >
                Weather in {weatherDetails.city}
            </Typography>
            <Typography variant="h3" color="primary" fontFamily="Roboto" fontWeight="bold" >
                {weatherDetails.temp}
            </Typography>
            <Box display='flex' alignItems='center' justifyContent='center'>
                <img src={weatherDetails.icon} alt="" />
                <Typography variant="h4" color="primary" fontFamily="Roboto" fontWeight="bold" >
                    {weatherDetails.description}
                </Typography>
            </Box>
            <Typography variant="h4" color="primary" fontFamily="Roboto" fontWeight="bold" >
                Humidity: {weatherDetails.humidity}
            </Typography>
            <Typography variant="h4" color="primary" fontFamily="Roboto" fontWeight="bold" >
                Wind speed: {weatherDetails.wind}
            </Typography>

        </Container>
    );
};


export default Weather;
