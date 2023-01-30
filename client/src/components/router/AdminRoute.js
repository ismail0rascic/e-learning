import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
const AdminRoute = (props) => {
  const user = props.auth.isAuthenticated && props.authUser && props.authUser;

  return user && user.role === "admin"
    ? props.children
    : user && <Navigate to={{ pathname: "/" }} />;
};
const mapStateToProps = (state) => ({
  auth: state.authR,
  users: state.userR,
  authUser: state.authUserR,
});
export default connect(mapStateToProps)(AdminRoute);
