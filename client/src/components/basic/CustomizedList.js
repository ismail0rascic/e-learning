import { Card, List } from "@material-ui/core";

import useStyles from "../../styles/style";

const CustomizedList = (props) => {
  const classes = useStyles();

  return (
    <>
      {
        <List>
          {props.data.map((_, i) => {
            return (
              <Card
                className={classes.card}
                style={{ maxHeight: 700, width: "80%", overflow: "auto" }}
                key={i}
              >
                {props.child(_, i)}
              </Card>
            );
          })}
        </List>
      }
    </>
  );
};

export default CustomizedList;
