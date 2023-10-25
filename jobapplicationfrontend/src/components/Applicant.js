import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { Container, Paper } from "@mui/material";

export default function Applicant() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const applicant = { name, address };
    console.log(applicant);
    fetch("http://localhost:8080/applicant/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicant),
    }).then(() => {
      console.log("New Applicant Added!");
    });
  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>
          <u>Add Applicant</u>
        </h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Applicant Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Applicant Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleClick}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
