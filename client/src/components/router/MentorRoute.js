import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
const MentorRoute = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!props.auth.isAuthenticated) return navigate("/");
  });
  const user = props.auth.isAuthenticated && props.authUser && props.authUser;
  return user && user.role !== "student"
    ? props.children
    : props.authUser && <Navigate to={{ pathname: "/" }} />;
};
const mapStateToProps = (state) => ({
  auth: state.authR,
  users: state.userR,
  authUser: state.authUserR,
});
export default connect(mapStateToProps)(MentorRoute);
