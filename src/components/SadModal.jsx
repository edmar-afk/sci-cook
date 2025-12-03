import React from "react";
import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
// Import Material Icons instead of Lucide icons
import CloseIcon from "@mui/icons-material/Close";
import WarningIcon from "@mui/icons-material/Warning";
import cheerImg from "../assets/images/cheer.png";
// --- Styles for the Modal Box Content (Using MUI sx Prop) ---
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 400 }, // Responsive width
  bgcolor: "white",
  border: "1px solid #e0e0e0",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  outline: "none", // Remove default focus outline
};

/**
 * A reusable modal component displaying an error message.
 * It includes two ways to close: the built-in IconButton (CloseIcon) and the primary action button.
 * * @param {object} props - The component props.
 * @param {boolean} props.open - State determining if the modal is visible.
 * @param {function} props.handleClose - Function to close the modal.
 */
function SadModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="sad-modal-title"
      aria-describedby="sad-modal-description"
      className="backdrop-blur-sm"
    >
      <Box sx={modalStyle}>
        {/* Close Button at the top right of the modal box */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "text.secondary",
          }}
        >
          {/* Replaced <X size={20} /> with <CloseIcon fontSize="small" /> */}
          <CloseIcon fontSize="small" />
        </IconButton>

        {/* Replaced <AlertTriangle size={48} ... /> with <WarningIcon ... /> */}
        {/* MUI Icons use the sx prop for styling instead of className for custom size/color */}
        <img src={cheerImg} alt="" />

        <Typography
          id="sad-modal-title"
          variant="h5"
          component="h2"
          sx={{ fontWeight: 600 }}
        >
          Keep Going!
        </Typography>

        <Typography
          id="sad-modal-description"
          sx={{ mt: 2, color: "text.secondary" }}
        >
          It’s okay if this topic didn’t click right away. Every try counts, and
          little by little, you’re building your skills. Don’t give up—you’ve
          got this!
        </Typography>

        {/* The required closing button */}
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 3,
            px: 4,
            py: 1.5,
            borderRadius: "10px",
            fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
          }}
          onClick={handleClose}
        >
          Acknowledge & Try Again
        </Button>
      </Box>
    </Modal>
  );
}

export default SadModal;
