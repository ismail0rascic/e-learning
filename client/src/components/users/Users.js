import { connect } from "react-redux";

import { Grid } from "@material-ui/core";

import Table from "../basic/Table";

import Dashboard from "../dashboard/Dashboard";
import UsersFilters from "../usersFilters/UsersFilters";
import Header from "../header/Header";
import useUsers from "./useUsers";
import { Pagination } from "@mui/material";
import usePagination from "../../customHooks/usePagination";
import { useState } from "react";

const Users = (props) => {
  const [page, setPage] = useState(1);

  const count = Math.ceil(props.users.length / 10);
  const dataP = usePagination(props.users, 10);

  const { data, filter, setFilter, navigate } = useUsers(dataP.currentData());

  const handleChange = (e, p) => {
    setPage(p);
    dataP.jump(p);
  };

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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <Pagination
              count={count}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </div>
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
