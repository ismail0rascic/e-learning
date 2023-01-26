import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Posts from "../posts/Posts";

const MentorPage = ({ authUser }) => {
  useEffect(() => {
    authUser.role !== "mentor" && navigate("/");
  });
  const navigate = useNavigate();
  return (
    <>
      <Header
        data={{
          title: "Courses/Projects",
          func: () => {
            navigate("/new/post");
          },
          button: "ADD",
        }}
      />
      <Posts />
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  authUser: state.authUserR,
});
export default connect(mapStateToProps)(MentorPage);