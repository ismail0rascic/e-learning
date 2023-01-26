import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
const MentorRoute = (props) => {
  const user = props.auth.isAuthenticated && props.authUser && props.authUser;

  return user && user.role !== "student" ? (
    props.children
  ) : (
    <Navigate to={{ pathname: "/signin" }} />
  );
};
const mapStateToProps = (state) => ({
  auth: state.authR,
  users: state.userR,
  authUser: state.authUserR,
});
export default connect(mapStateToProps)(MentorRoute);
