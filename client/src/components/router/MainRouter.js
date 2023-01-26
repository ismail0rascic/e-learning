import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { getPost } from "../../actions/postActions";

import PrivateRoute from "./PrivateRoute";
import MentorRoute from "./MentorRoute";
import AdminRoute from "./AdminRoute";

import Signin from "../signin/Signin";
import Signup from "../signup/Signup";
import NewPost from "../newPost/NewPost";
import SetPassword from "../setPassword/SetPassword";
import UpdateProfile from "../updateProfile/UpdateProfile";
import DeleteProfile from "../deleteProfile/DeleteProfile";
import MentorPage from "../mentorPage/MentorPage";
import PostDelete from "../postDelete/PostDelete";
import Users from "../users/Users";
import ShowPosts from "../showPosts/ShowPosts";
import StudentPage from "../studentPage/StudentPage";
import Home from "../home/Home";
import SearchPosts from "../searchPosts/SearchPosts";
import AdminPage from "../adminPage/AdminPage";
import { getUser } from "../../actions/userActions";

const MainRouter = (props) => {
  useEffect(() => {
    getPost();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    props.auth.isAuthenticated && getUser(props.auth.user._id);
    // eslint-disable-next-line
  }, [props.auth.user._id]);
  return (
    <>
      {props.auth.loading && (
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/student"
            element={
              <PrivateRoute>
                <StudentPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/password"
            element={
              <PrivateRoute>
                <SetPassword />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/delete"
            element={
              <PrivateRoute>
                <DeleteProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/search/posts"
            element={
              <PrivateRoute>
                <SearchPosts />
              </PrivateRoute>
            }
          />
          <Route
            path="/mentor"
            element={
              <MentorRoute>
                <MentorPage />
              </MentorRoute>
            }
          />
          <Route
            path="/new/post"
            element={
              <MentorRoute>
                <NewPost />
              </MentorRoute>
            }
          />
          <Route
            path="/edit/post/:id"
            element={
              <MentorRoute>
                <NewPost />
              </MentorRoute>
            }
          />
          <Route
            path="/delete/post/:id"
            element={
              <MentorRoute>
                <PostDelete />
              </MentorRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminPage />
              </AdminRoute>
            }
          />
          <Route
            path="/posts"
            element={
              <AdminRoute>
                <ShowPosts />
              </AdminRoute>
            }
          />
          <Route
            path="/users"
            element={
              <AdminRoute>
                <Users />
              </AdminRoute>
            }
          />
          <Route
            path="/new/user"
            element={
              <AdminRoute>
                <Signup />
              </AdminRoute>
            }
          />
          <Route
            path="/user/edit/:id"
            element={
              <AdminRoute>
                <UpdateProfile />
              </AdminRoute>
            }
          />
          <Route
            path="/user/password/:id"
            element={
              <AdminRoute>
                <SetPassword />
              </AdminRoute>
            }
          />
        </Routes>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  auth: state.authR,
  users: state.userR,
  authUser: state.authUserR,
});
export default connect(mapStateToProps)(MainRouter);
