import React from "react";
import { connect } from "react-redux/es";
import { useEffect } from "react";

import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";

import SearchBar from "../basic/SearchBar";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";

import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../actions/userActions";

const ApplicationBar = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => navigate("/")}
            style={{ margin: "0" }}
          >
            <CastForEducationIcon fontSize="large" />
          </IconButton>
          <Typography variant="h4">E-Learning</Typography>

          <SearchBar />
          {!props.auth.isAuthenticated ? (
            <>
              <Button
                variant="outlined"
                color="inherit"
                style={{
                  position: "absolute",
                  right: 30,
                  margin: "0",
                }}
                onClick={() => {
                  navigate("/signin");
                }}
              >
                Sign in
              </Button>

              <Button
                variant="outlined"
                color="inherit"
                style={{
                  position: "absolute",
                  right: 130,
                  margin: "0",
                }}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign Up
              </Button>
            </>
          ) : (
            <>
              {props.authUser && (
                <Typography
                  variant="h6"
                  style={{
                    position: "absolute",
                    right: 30,
                    margin: "0",
                  }}
                >
                  {props.authUser.role === "admin"
                    ? "Admin Dashboard"
                    : props.authUser.role === "mentor"
                    ? "Mentor Dashboard"
                    : props.authUser.role === "student" && "Student Dashboard"}
                </Typography>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  user: state.userR,
  authUser: state.authUserR,
});

export default connect(mapStateToProps)(ApplicationBar);
