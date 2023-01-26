import { connect } from "react-redux";
import { IconButton, Paper, Typography } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { CLEAR_MESSAGE } from "../../actions/types";
import { useEffect } from "react";
const Message = ({ clear, message }) => {
  useEffect(() => {
    setTimeout(() => {
      clear();
    }, 3000);
          // eslint-disable-next-line
  }, []);

  return (
    <Paper
      style={{
        width: "auto",
        position: "absolute",
        bottom: 50,
        left: "50%",
        transform: "translate(-50%, -50%)",
        margin: "auto",
        background: "#44af59",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      &nbsp;&nbsp;
      <DoneAllIcon />
      &nbsp;&nbsp;
      <Typography variant="h6">{message}</Typography>
      <IconButton
        onClick={() => {
          clear();
        }}
        style={{ color: "white" }}
      >
        <CloseIcon />
      </IconButton>
    </Paper>
  );
};
const mapStateToProps = (state) => ({
  message: state.messageR,
});
const mapDispatchToProps = (dispatch) => ({
  clear: () => dispatch({ type: CLEAR_MESSAGE }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Message);
