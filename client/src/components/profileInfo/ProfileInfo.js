import { connect } from "react-redux";

import { Avatar, Card, CardContent, Typography } from "@material-ui/core";

const ProfileInfo = ({authUser}) => {
  return (
    <Card>
      {authUser && (
        <CardContent>
          <Avatar
            src={authUser.image ? require(`../../images/${authUser.image}`) : ""}
            alt="item img"
            style={{ width: 100, height: 100, margin: "0 auto 20px auto" }}
          />
          <Typography style={{ textAlign: "center" }}>
            {authUser.firstName}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.authUserR,
});

export default connect(mapStateToProps)(ProfileInfo);
