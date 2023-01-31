import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
const AdminRoute = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!props.auth.isAuthenticated) return navigate("/");
  });
  return props.authUser.role === "admin"
    ? props.children
    : props.authUser && <Navigate to={{ pathname: "/" }} />;
};
const mapStateToProps = (state) => ({
  auth: state.authR,
  users: state.userR,
  authUser: state.authUserR,
});

export default connect(mapStateToProps)(AdminRoute);
