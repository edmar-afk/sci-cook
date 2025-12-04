import React from "react";
import { Modal, Box, Typography } from "@mui/material";

function Reference({ open, onClose }) {
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
          Key Takeaways and Reference
        </Typography>

        <Typography>Your reference content here...</Typography>
      </Box>
    </Modal>
  );
}

export default Reference;
