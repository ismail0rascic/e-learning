import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CustomizedButton from "./CustomizedButton";

const CardDialog = ({ open, setOpen, data, buttons }) => {
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      style={{ color: "orange" }}
    >
      <DialogTitle variant="h4" id="alert-dialog-title">
        {data.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          variant="h5"
          id="alert-dialog-description"
          style={{ display: "flex", alignItems: "center" }}
        >
          {data.icon}&nbsp;&nbsp;{data.text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {buttons.map((_, i) => {
          return <CustomizedButton key={_ + i} data={_} />;
        })}
      </DialogActions>
    </Dialog>
  );
};
export default CardDialog;
