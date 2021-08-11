import React from "react";
import "../../Styles/login.css";
import { SimpleLoginForm } from "simple-login-form";
import "simple-login-form/dist/index.css";
import GoogleLogin from "react-google-login";

import {
  Avatar,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  avatar_root: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: "1px auto",
  },
  MuiSvgIcon: {
    height: "40px",
    width: "40px",
  },
}));

const responseGoogle = (response) => {
  console.log(response);
};

const Login = () => {
  const classes = useStyles();
  return (
    <>
      <div className="my-4 text-center">
        <Container>
          <div className="box">
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              {/* <div className="container"> */}
              <Grid item xs={12} className="">
                <Avatar
                  className={classes.avatar_root}
                  src="https://source.unsplash.com/random"
                  alt="Login"
                />
              </Grid>
              <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <AccountCircleIcon fontSize="large" />
                </Grid>
                <Grid item>
                  <input
                    type="text"
                    className="login_input"
                    placeholder="username"
                  />
                </Grid>
              </Grid>
              <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <VisibilityOffIcon fontSize="large" />
                </Grid>
                <Grid item>
                  <input
                    type="passoword"
                    className="login_input"
                    placeholder="password"
                  />
                </Grid>
              </Grid>
              <div className="my-2">
                <button class="btn btn-primary btn-login" type="submit">
                  Login
                </button>
              </div>
              <Grid item>
                <div class="my23" variant="subtitle1">
                  <b> Don't have an account? </b>
                  <spacer />
                  <Link to="/signup" className="link-danger">
                    <b>Register here</b>
                  </Link>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <div class="GoogleLogin">
        <h4>or</h4>
        <div class="line"></div>
        <b>Login using Google Account</b>
        <div>
          <GoogleLogin
            clientId="199665230926-cm60pu27aj3sgmt4804gh6fe9hvh2lbh.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
      <div class="line"></div>
    </>
  );
};

export default Login;
