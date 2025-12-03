import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { alpha, styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../../assets/images/logo.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#fff", 0.2),
  "&:hover": { backgroundColor: alpha("#fff", 0.35) },
  marginLeft: theme.spacing(1),
  width: "20ch",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#fff",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "linear-gradient(to right, #ec4899, #db2777)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img src={logo} alt="logo" className="rounded-full w-8" />
          </Box>

          <Typography
            variant="h6"
            sx={{ textAlign: "center", flexGrow: 1, fontWeight: "bold" }}
          >
            SciCooks
          </Typography>

          {!isMobile && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "#fff" }} />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" />
            </Search>
          )}

          {isMobile && (
            <IconButton color="inherit" onClick={() => setOpenSearch(true)}>
              <SearchIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Dialog
        fullWidth
        open={openSearch}
        TransitionComponent={Transition}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(255, 228, 235, 0.95)",
            backdropFilter: "blur(6px)",
            p: 2,
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton onClick={() => setOpenSearch(false)}>
            <CloseIcon sx={{ color: "#db2777" }} />
          </IconButton>

          <Box
            sx={{
              flexGrow: 1,
              backgroundColor: "rgba(219, 39, 119, 0.15)",
              borderRadius: 2,
              position: "relative",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#db2777" }} />
            </SearchIconWrapper>
            <StyledInputBase
              autoFocus
              placeholder="Search…"
              sx={{ width: "100%", color: "#db2777" }}
            />
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
