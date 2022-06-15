import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getTeachers } from "../../redux/actions/teachers";

import Search from "../../shared/Search/Search";
import Table from "../../shared/Table/Table";

const Teacher = ({ getTeachers, teachers }) => {
  const getRows = (obj, index) => {
    return (
      <tr key={index}>
        <td>{obj.name}</td>
        <td>{obj.address}</td>
        <td>{obj.subjects.join(", ")}</td>
      </tr>
    );
  };
  const cols = (
    <tr>
      <th>Name</th>
      <th>Address</th>
      <th>Subjects</th>
    </tr>
  );
  const searchHandler = useCallback(
    (query) => {
      getTeachers(query);
    },
    [getTeachers]
  );
  useEffect(() => {
    getTeachers();
  }, [getTeachers]);

  return (
    <div className="container mt-3">
      <div className="mb-5">
        <Search onSearch={searchHandler} />
      </div>
      <div>
        <Table columns={cols} rows={teachers.map(getRows)} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    teachers: state.teachers.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTeachers: (query) => dispatch(getTeachers(query)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Teacher);
