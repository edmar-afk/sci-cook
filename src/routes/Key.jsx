import React from "react";
import { Modal, Box, Typography } from "@mui/material";

export default function Key({ open, onClose }) {
  const fileId = "1xUTPn6lytw4ZNsL0CvmuCFtCyiNklA-J";
  
  const viewerUrl = `https://docs.google.com/document/d/${fileId}/preview`;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw",
          height: "80vh",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 2,
        }}
      >
        <Typography variant="h6" mb={2}>
          KEY TAKEAWAYS
        </Typography>

        <iframe
          title="Google Doc Viewer"
          src={viewerUrl}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        ></iframe>
      </Box>
    </Modal>
  );
}
