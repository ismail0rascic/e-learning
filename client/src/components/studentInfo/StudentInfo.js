import { connect } from "react-redux";

import { Card, CardContent, Typography } from "@material-ui/core";

const StudentInfo = ({ authUser }) => {
  return (
    <Card>
      {authUser && (
        <CardContent>
          <Typography
            color="primary"
            style={{ textAlign: "center", margin: "5px 0", fontWeight: "bold" }}
          >
            Completed Courses
          </Typography>
          <Typography
            style={{ textAlign: "center", margin: "5px 0", fontWeight: "bold" }}
          >
            {authUser && authUser.completed.length}
          </Typography>
          <Typography
            color="primary"
            style={{ textAlign: "center", margin: "5px 0", fontWeight: "bold" }}
          >
            In Progress
          </Typography>
          <Typography
            style={{ textAlign: "center", margin: "5px 0", fontWeight: "bold" }}
          >
            {authUser && authUser.courses.length - authUser.completed.length}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.authUserR,
});

export default connect(mapStateToProps)(StudentInfo);
