import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

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
          maxHeight: "80vh",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p className="font-bold mb-8 text-xl">
          Reflection
        </p>

        {/* Scrollable content */}
        <Box
          sx={{
            overflowY: "auto",
            flexGrow: 1,
            pr: 1, // space for scrollbar
          }}
        >
          <p>
           The development of QR code-based instructional materials
            in Grade 8 Cookery integrates technology with practical culinary
            learning. By linking ingredients and cooking terminologies to
            images, videos, audio pronunciations, and scientific names, students
            gain immediate access to rich, interactive content. This approach
            enhances understanding, retention, and engagement, catering to
            different learning styles. <br/><br/> Integrating scientific names like Allium
            sativum for garlic or Piper nigrum for black pepper helps students
            connect theory with practice, reinforcing both culinary skills and
            scientific literacy. QR codes also allow self-directed learning,
            support teacher efficiency, and align with modern pedagogical
            frameworks like SAMR and TPACK. <br/><br/> Overall, QR code-based materials
            transform traditional cookery lessons into interactive, multimedia
            experiences that foster curiosity, critical thinking, and digital
            competence, bridging the gap between culinary practice and
            scientific understanding.
          </p>
        </Box>

        {/* Close button */}
        <Box mt={2} textAlign="right">
          <Button variant="contained" onClick={onClose}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default Reflection;
