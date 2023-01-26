import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
const Home = ({ authUser }) => {
  return authUser.role === "admin" ? (
    <Navigate to={{ pathname: "/admin" }} />
  ) : authUser.role === "mentor" ? (
    <Navigate to={{ pathname: "/mentor" }} />
  ) : (
    authUser.role === "student" && <Navigate to={{ pathname: "/student" }} />
  );
};
const mapStateToProps = (state) => ({
  authUser: state.authUserR,
});
export default connect(mapStateToProps)(Home);
