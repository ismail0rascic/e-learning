import { Box, Typography } from "@material-ui/core";
import Dashboard from "../dashboard/Dashboard";

const AdminPage = () => {
  const children1 = () => {
    return (
      <>
        <Box style={{ display: "flex" }}>
          <Typography
            variant="h4"
            style={{
              margin: 20,
              width: "100%",
              background: "lightBlue",
              color: "blue",
            }}
          >
            Admin Dashboard
          </Typography>
        </Box>
      </>
    );
  };

  return <Dashboard children={children1} />;
};

export default AdminPage;
