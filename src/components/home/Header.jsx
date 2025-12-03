import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import logo from "../../assets/images/logo.png";

export default function Header() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          background: "linear-gradient(to right, #ec4899, #db2777)",
          zIndex: 1000,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              color="inherit"
              onClick={() => window.history.back()}
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <ArrowBackIcon />
              {!isMobile && (
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Back
                </Typography>
              )}
            </IconButton>
          </Box>

          <Typography
            variant="h6"
            sx={{ textAlign: "center", flexGrow: 1, fontWeight: "bold" }}
          >
            SciCooks
          </Typography>

          <img src={logo} alt="logo" className="rounded-full w-8" />
        </Toolbar>
      </AppBar>

      {/* Spacer to prevent content from going under the fixed header */}
      <div style={{ height: 64 }} />
    </>
  );
}
