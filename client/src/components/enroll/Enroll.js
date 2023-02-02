import { Button, List, ListItem, Paper, Typography } from "@material-ui/core";
import Tooltip from "@mui/material/Tooltip";
import { addCourse } from "../../actions/userActions";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

const Enroll = ({ children, post, authUser }) => {
  const enrolled = authUser && authUser.courses.includes(post._id);
  return (
    <>
      {
        <Tooltip
          title={
            <Paper style={{ padding: 20 }}>
              <List>
                {[1, 2, 3].map((_) => {
                  return (
                    <ListItem key={_}>
                      <Typography style={{ width: "100%" }}>
                        <DoneOutlineIcon /> &nbsp; Lorem ipsum dolor sit amet
                      </Typography>
                    </ListItem>
                  );
                })}
              </List>

              <Button
                variant="contained"
                disabled={(authUser && authUser.role !== "student") || enrolled}
                color="primary"
                style={{ width: "100%" }}
                onClick={() => {
                  addCourse(
                    {
                      userId: authUser && authUser._id,
                      postId: post && post._id,
                    },
                    authUser
                  );
                }}
              >
                {enrolled ? "Enrolled" : "Enroll"}
              </Button>
            </Paper>
          }
          placement="left-end"
          style={{ width: 500 }}
        >
          <div>{children && children()}</div>
        </Tooltip>
      }
    </>
  );
};
export default Enroll;
