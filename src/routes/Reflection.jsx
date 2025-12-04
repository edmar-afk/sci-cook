import React from "react";
import { Modal, Box, Typography } from "@mui/material";

function Reflection({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" mb={2}>
          Reflection
        </Typography>

        <Typography>Your reflection content...</Typography>
      </Box>
    </Modal>
  );
}

export default Reflection;
