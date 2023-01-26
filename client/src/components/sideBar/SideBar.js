import { connect } from "react-redux";

import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import useSideBar from "./useSideBar";
import ProfileInfo from "../profileInfo/ProfileInfo";
import StudentInfo from "../studentInfo/StudentInfo";
import { useLocation } from "react-router-dom";

const SideBar = (props) => {
  const location = useLocation().pathname;
  const { items } = useSideBar(props.authUser);
  return (
    <>
      <ProfileInfo />
      <List>
        {items
          .filter((item) => item)
          .map((item, i) => (
            <ListItem key={i} button onClick={() => item.func()}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
      </List>
      {location.includes("student") && <StudentInfo />}
    </>
  );
};
const mapStateToProps = (state) => ({
  authUser: state.authUserR,
});
export default connect(mapStateToProps)(SideBar);
