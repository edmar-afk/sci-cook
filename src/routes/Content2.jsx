import React from "react";
import Header from "../components/home/Header";
import { IconButton, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function Content2() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Box
        display="flex"
        alignItems="center"
        mt={1}
        ml={1}
        sx={{ cursor: "pointer" }}
        onClick={() => navigate(-1)}
      >
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="button">Back</Typography>
      </Box>
      <div>Wait for update</div>
    </div>
  );
}

export default Content2;
