import {
  AppBar,
  Avatar,
  Grid,
  Icon,
  makeStyles,
  Toolbar,
  Input,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
// import logo from "./Logo.jpg";
import SearchIcon from "@material-ui/icons/Search";
import { useLocation } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root_Appbar: {
    padding: "10px",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  let params = useLocation();
  console.log(params);
  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: "#720D5D", color: "#720D5D" }}
        className={classes.root_Appbar}
        // color="primary"
        elevation={5}
      >
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <Grid item xs={1}>
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
              className="Logo"
              alt="logo"
            />
          </Grid>
          {params.pathname == "/List" && (
            <Grid item xs={6}>
              <Input
                type="text"
                className="Search"
                placeholder="Search..."
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    window.location = "/search/" + e.target.value;
                  }
                }}
                endAdornment={<SearchIcon />}
              />
            </Grid>
          )}
          <Grid item xs></Grid>
          <Grid item xs={1}>
            {" "}
            <Link className="Link" to={"/home"}>
              Home
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link className="Link" to={"/List"}>
              LIST
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link className="Link" to={"/create"}>
              Create
            </Link>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default Header;
/*
<header className="Header">
<img src={logo} className="Logo" alt="logo" />
<div className="Spacer" />
<input
  type="text"
  className="Search"
  placeholder="Search..."
  onKeyDown={(e) => {
    if (e.key == "Enter") {
      window.location = "/search/" + e.target.value;
    }
  }}
/>
<div className="Spacer" />
<nav className="Nav">
  <Link className="Link" to={"/home"}>
    Home
  </Link>
  <Link className="Link" to={"/List"}>
    List
  </Link>
  <Link className="Link" to={"/create"}>
    Create
  </Link>
</nav>
</header>
*/
