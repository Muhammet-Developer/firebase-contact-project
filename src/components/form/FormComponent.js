import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
  MenuItem,
  Button,
  Stack,
  Select,
  Box,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

const FormComponent = ({info,setInfo,handleSubmit}) => {
  const handleChange = (e)=>{
    //!name database  name gözüksün diye yani 
    // !name yazdığı isim 
    // const name = e.target.name;
    // const value = e.target.value;
    e.preventDefault();
    const {name,value} = e.target
    setInfo({...info,[name]:value});
    //[name] demek dataya veri gidecek onu key:value tarzında gitsin
    //name inputlara verdiğimiz name ismi neyse o şekilde gider
    
    // console.log(info)
  }
  return (
    <Grid 
      textAlign="center"
      verticalAlign="middle"
      direction="column"
      style={{ width: "300" }}
    >
      <p className="contact-header">
        <div>
          <a
            href="https://github.com/Muhammet-Developer?tab=repositories"
            className="design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>{"<Muhammet/> "}</code>
          </a>
        </div>
        <span className="design header">design</span>
      </p>
      <h2 className="contact-header">Add Contact</h2>

      <Box style={{ backgroundColor: "white", padding: "20px" }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3} direction="column">
            <TextField
              variant="outlined"
              name="username"
              value={info.username}
              onChange={handleChange}
              placeholder="Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              type="number"
              name="phoneNumber"
              value={info.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneEnabledIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel style={{ paddingLeft: "20px" }}>Gender</InputLabel>
              <Select
                label="Gender"
                name="gender"
                variant="outlined"
                value={info.gender}
                onChange={handleChange}
              >
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            {!info.id ?<Button variant="contained" type="submit" value="Submit">
              ADD
            </Button>: <Button variant="contained" type="submit" value="Submit">
              update
            </Button> }
            {/* <Button variant="contained" type="submit" value="Submit">
              ADD
            </Button> */}
          </Stack>
        </form>
      </Box>
    </Grid>
  );
};

export default FormComponent;