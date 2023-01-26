import { connect } from "react-redux";

import { Grid } from "@material-ui/core";

import Table from "../basic/Table";

import Dashboard from "../dashboard/Dashboard";
import UsersFilters from "../usersFilters/UsersFilters";
import Header from "../header/Header";
import useUsers from "./useUsers";

const Users = (props) => {
  const { data, filter, setFilter, navigate } = useUsers(props.users);
  const children = () => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Header
            data={{
              title: "All Users",
              func: () => {
                navigate("/new/user");
              },
              button: "Add Users",
            }}
          />
          <UsersFilters filter={filter} setFilter={setFilter} />

          {data && <Table data={data} />}
        </Grid>
      </Grid>
    );
  };

  return <Dashboard children={children} />;
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  users: state.userR,
});
export default connect(mapStateToProps)(Users);
