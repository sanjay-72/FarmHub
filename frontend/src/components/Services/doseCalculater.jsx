import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const area = [
  {
    value: "HECTARE",
    label: "ha",
  },
  {
    value: "ACRE",
    label: "ac",
  },
];

const crops = [
  {
    value: "Barley",
    label: "Barley"
  },
  {
    value: "Brinjal",
    label: "Brinjal"
  },
  {
    value: "Carrot",
    label: "Carrot"
  },
  {
    value: "Cauliflower",
    label: "Cauliflower"
  },
  {
    value: "Chickpea",
    label: "Chickpea",
  },
  {
    value: "Mustard",
    label: "Mustard",
  },
  {
    value: "Onion",
    label: "Onion",
  },
  {
    value: "Potato",
    label: "Potato",
  },
  {
    value: "Radish",
    label: "Radish",
  },
  {
    value: "Rice",
    label: "Rice",
  },
  {
    value: "Tomato",
    label: "Tomato",
  },
  {
    value: "Wheat",
    label: "Wheat",
  },
];

const Services = () => {
  //States
  // //For setting crop
  const [userCropInfo, setUserCropInfo] = useState({
    cropName: "",
    area: "",
    unit: "",
  });

  // const [cropinfo, setCropInfo] = useState(null);

  const handleChange = (e) => {
    setUserCropInfo({ ...userCropInfo, [e.target.name]: e.target.value });
  };

  // Function for Dose calculation -> called when calculate button is clicked.

  const updateAnswer = (e) => {
    var acreArea = 0, answer = {};

    // Converting area to Acres for easy calculation.
    if (userCropInfo.unit === "HECTARE")
      acreArea = userCropInfo.area * 2.47105;
    else
      acreArea = userCropInfo.area;


    // Conditional implementation of calculation
    if (userCropInfo.cropName === "Barley") {
      //Values as per standards
      let lBound = ((5.055 - 1) * acreArea).toFixed(2);
      let uBound = ((5.055 + 1) * acreArea).toFixed(2);
      answer.manures = {};
      answer.manures.FYM = `${lBound} - ${uBound} t`;
      answer.manures.urea = `${(55 * acreArea).toFixed(2)} Kg`;
      answer.seedRate = `43.54 - 54.43 Kg/Acre`;
      answer.seedsRequired = `${(43.54 * acreArea).toFixed(2)} - ${(54.43 * acreArea).toFixed(2)} Kgs`;
      answer.manures.phosphate = `${(12 * acreArea).toFixed(2)} Kg`;
      answer.manures.pottasium = `${(6 * acreArea).toFixed(2)} Kg`;
    }

    else if (userCropInfo.cropName === "Brinjal") {
      //Values as per standards
      let lBound = ((10.11 - 1) * acreArea).toFixed(2);
      let uBound = ((10.11 + 1) * acreArea).toFixed(2);
      answer.manures = {};
      answer.manures.FYM = `${lBound} - ${uBound} t`;
      answer.manures.urea = `${(55 * acreArea).toFixed(2)} Kg`;
      answer.seedRate = `160 - 200 gm/Acre`;
      answer.seedsRequired = `${(160 * acreArea).toFixed(2)} - ${(200 * acreArea).toFixed(2)} gm`;
      answer.manures.phosphate = `${(60 * acreArea).toFixed(2)} Kg`;
      answer.manures.pottasium = `${(70 * acreArea).toFixed(2)} Kg`;
    }

    else if (userCropInfo.cropName === "Carrot") {
      //Values as per standards
      let lBound = ((10.11 - 1) * acreArea).toFixed(2);
      let uBound = ((10.11 + 1) * acreArea).toFixed(2);
      answer.manures = {};
      answer.manures.FYM = `${lBound} - ${uBound} t`;
      answer.manures.urea = `${(60 * acreArea).toFixed(2)} Kg N ha -1`;
      answer.seedRate = `2 Kg/Acre`;
      answer.seedsRequired = `${(2 * acreArea).toFixed(2)} Kg`;
      answer.manures.phosphate = `${(15 * acreArea).toFixed(2)} Kg`;
      answer.manures.pottasium = `${(15 * acreArea).toFixed(2)} Kg`;
    }

    else if (userCropInfo.cropName === "Cauliflower") {
      //Values as per standards
      let lBound = ((8.09 - 1) * acreArea).toFixed(2);
      let uBound = ((8.2 + 1) * acreArea).toFixed(2);
      answer.manures = {};
      answer.manures.FYM = `${lBound} - ${uBound} t`;
      answer.manures.urea = `${(1.25 * acreArea).toFixed(2)} Kg`;
      answer.seedRate = `350 - 500 gm/Acre`;
      answer.seedsRequired = `${(350 * acreArea).toFixed(2)} - ${(500 * acreArea).toFixed(2)} gm`;
      answer.manures.phosphate = `${(70 * acreArea).toFixed(2)} Kg`;
      answer.manures.pottasium = `${(75 * acreArea).toFixed(2)} Kg`;
    }

    else if (userCropInfo.cropName === "Chickpea") {
      //Values as per standards
      let lBound = ((9 - 1) * acreArea).toFixed(2);
      let uBound = ((9 + 1) * acreArea).toFixed(2);
      answer.manures = {};
      answer.manures.FYM = `${lBound} - ${uBound} t`;
      answer.manures.urea = `${(18 * acreArea).toFixed(2)} Kg`;
      answer.seedRate = `24 - 26 Kg/Acre`;
      answer.seedsRequired = `${(24 * acreArea).toFixed(2)} - ${(26 * acreArea).toFixed(2)} Kg`;
      answer.manures.phosphate = `${(50 * acreArea).toFixed(2)} Kg`;
      answer.manures.pottasium = `${(20 * acreArea).toFixed(2)} Kg`;
    }

    else if (userCropInfo.cropName === "Mustard") {
      //Values as per standards
      let lBound = ((3.8 - 1) * acreArea).toFixed(2);
      let uBound = ((3.8 + 1) * acreArea).toFixed(2);
      answer.manures = {};
      answer.manures.FYM = `${lBound} - ${uBound} t`;
      answer.manures.urea = `${(65 * acreArea).toFixed(2)} Kg`;
      answer.seedRate = `4 - 5 Kg/Acre`;
      answer.seedsRequired = `${(4 * acreArea).toFixed(2)} - ${(5 * acreArea).toFixed(2)} Kg`;
      answer.manures.phosphate = `${(60 * acreArea).toFixed(2)} Kg`;
      answer.manures.pottasium = `${(40 * acreArea).toFixed(2)} Kg`;
    }

    else if (userCropInfo.cropName === "Onion") {
      //Values as per standards
      let lBound = ((5.5 - 1) * acreArea).toFixed(2);
      let uBound = ((5.5 + 1) * acreArea).toFixed(2);
      answer.manures = {};
      answer.manures.FYM = `${lBound} - ${uBound} t`;
      answer.manures.urea = `${(90 * acreArea).toFixed(2)} Kg`;
      answer.seedRate = `8 - 10 Kg/Acre`;
      answer.seedsRequired = `${(8 * acreArea).toFixed(2)} - ${(10 * acreArea).toFixed(2)} Kg`;
      answer.manures.phosphate = `${(20 * acreArea).toFixed(2)} Kg`;
      answer.manures.pottasium = `${(40 * acreArea).toFixed(2)} Kg`;
    }

    else if (userCropInfo.cropName === "Potato") {
      //Values as per standards
      let lBound = ((5.5 - 1) * acreArea).toFixed(2);
      let uBound = ((5.5 + 1) * acreArea).toFixed(2);
      answer.manures = {};
      answer.manures.FYM = `${lBound} - ${uBound} t`;
      answer.manures.urea = `${(165 * acreArea).toFixed(2)} Kg`;
      answer.seedRate = `600 - 680 Kg/Acre`;
      answer.seedsRequired = `${(600 * acreArea).toFixed(2)} - ${(680 * acreArea).toFixed(2)} Kg`;
      answer.manures.phosphate = `${(12 * acreArea).toFixed(2)} Kg`;
      answer.manures.pottasium = `${(17 * acreArea).toFixed(2)} Kg`;
    }

    else if (userCropInfo.cropName === "Radish") {
      //Values as per standards
      let lBound = ((9.5 - 1) * acreArea).toFixed(2);
      let uBound = ((9.5 + 1) * acreArea).toFixed(2);
      answer.manures = {};
      answer.manures.FYM = `${lBound} - ${uBound} t`;
      answer.manures.urea = `${(55 * acreArea).toFixed(2)} Kg`;
      answer.seedRate = `4 - 5 Kg/Acre`;
      answer.seedsRequired = `${(4 * acreArea).toFixed(2)} - ${(5 * acreArea).toFixed(2)} Kg`;
      answer.manures.phosphate = `${(10 * acreArea).toFixed(2)} Kg`;
      answer.manures.pottasium = `${(20 * acreArea).toFixed(2)} Kg`;
    }

    else if (userCropInfo.cropName === "Rice") {
      //Values as per standards
      let lBound = ((7 - 1) * acreArea).toFixed(2);
      let uBound = ((7 + 1) * acreArea).toFixed(2);
      answer.manures = {};
      answer.manures.FYM = `${lBound} - ${uBound} t`;
      answer.manures.urea = `${(110 * acreArea).toFixed(2)} Kg`;
      answer.seedRate = `8 - 10 Kg/Acre`;
      answer.seedsRequired = `${(8 * acreArea).toFixed(2)} - ${(10 * acreArea).toFixed(2)} Kg`;
      answer.manures.phosphate = `${(12 * acreArea).toFixed(2)} Kg`;
      answer.manures.pottasium = `${(12 * acreArea).toFixed(2)} Kg`;
    }

    else if (userCropInfo.cropName === "Tomato") {
      //Values as per standards
      let lBound = ((19 - 1) * acreArea).toFixed(2);
      let uBound = ((19 + 1) * acreArea).toFixed(2);
      answer.manures = {};
      answer.manures.FYM = `${lBound} - ${uBound} t`;
      answer.manures.urea = `${(75 * acreArea).toFixed(2)} Kg`;
      answer.seedRate = `200 - 250 gm/Acre`;
      answer.seedsRequired = `${(0.2 * acreArea).toFixed(2)} - ${(0.25 * acreArea).toFixed(2)} Kg`;
      answer.manures.phosphate = `${(12 * acreArea).toFixed(2)} Kg`;
      answer.manures.pottasium = `${(12 * acreArea).toFixed(2)} Kg`;
    }

    //If nothing above matched then default will be as same as Wheat
    else {
      //Values as per standards
      let lBound = ((5 - 1) * acreArea).toFixed(2);
      let uBound = ((5 + 1) * acreArea).toFixed(2);
      answer.manures = {};
      answer.manures.FYM = `${lBound} - ${uBound} t`;
      answer.manures.urea = `${(5.5 * acreArea).toFixed(2)} Kg`;
      answer.seedRate = `30 - 35 Kg/Acre`;
      answer.seedsRequired = `${(30 * acreArea).toFixed(2)} - ${(35 * acreArea).toFixed(2)} Kg`;
      answer.manures.phosphate = `${(16 * acreArea).toFixed(2)} Kg`;
      answer.manures.pottasium = `${(16 * acreArea).toFixed(2)} Kg`;
    }


    console.log(answer);
  }
  //Logic for dose calculation ends.

  return (
    <Container sx={{ mt: { xs: 6, sm: 8 }, padding: "5vmax" }}>
      <Typography
        variant="h2"
        color="cropHeading.main"
        fontFamily="Roboto"
        fontWeight="bold"
      >
        DOSE CALCULATOR
      </Typography>
      <Typography
        paddingTop={3}
        align="left"
        variant="h6"
        color="primary"
        fontFamily="Roboto"
        fontWeight="bold"
      >
        FarmHub provides you an unique feature for calculating common and specific
        manures for crops, type of soil needed for crop, suitable temprature for
        crop and more details for better yielding.
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          {/* Crop name  */}
          <Typography
            paddingTop={5}
            align="left"
            variant="h5"
            color="cropHeading.main"
            fontFamily="Roboto"
            fontWeight="bold"
          >
            Crop Name
          </Typography>

          <Box
            component="form"
            ml="0"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "80%" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-select-currency"
                select
                label="Crop name"
                name="cropName"
                onChange={handleChange}
                helperText="Select your crop name"
              >
                {crops.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Box>

          {/* Land area */}
          <Typography
            paddingTop={2}
            align="left"
            variant="h5"
            color="cropHeading.main"
            fontFamily="Roboto"
            fontWeight="bold"
          >
            Land area
          </Typography>

          <Box
            component="form"
            ml="0"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "80%" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Area"
                name="area"
                onChange={handleChange}
                helperText="Select the area"
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Unit"
                name="unit"
                onChange={handleChange}
                helperText="Select the unit"
              >
                {area.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Box>

          <Button
            size="large"
            sx={{ marginTop: "1rem", width: "80%", textTransform: "none" }}
            color="tertiary"
            variant="contained"
            onClick={updateAnswer}
          >
            Calculate
          </Button>
        </Grid>

        <Grid item xs={6} display="block">
          <Typography
            id="dose-calculator-output"
            paddingTop={25}
            align="center"
            variant="h5"
            color="cropHeading.main"
            fontFamily="Roboto"
            fontWeight="bold"
          >
            UNDER DEVLOPMENT1⚠️
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
