import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getStudents } from "../../redux/actions/students";

import Search from "../../shared/Search/Search";
import Table from "../../shared/Table/Table";

const Student = ({ getStudents, students }) => {
  const cols = (
    <tr>
      <th>Name</th>
      <th>Address</th>
    </tr>
  );
  const getRows = (obj, index) => {
    return (
      <tr key={index}>
        <td>{obj.name}</td>
        <td>{obj.address}</td>
      </tr>
    );
  };
  const searchHandler = useCallback(
    (query) => getStudents(query),
    [getStudents]
  );
  useEffect(() => getStudents(), [getStudents]);

  return (
    <div className="container mt-3">
      <div className="mb-5">
        <Search onSearch={searchHandler} />
      </div>
      <div>
        <Table columns={cols} rows={students.map(getRows)} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    students: state.students.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStudents: (query) => dispatch(getStudents(query)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Student);
