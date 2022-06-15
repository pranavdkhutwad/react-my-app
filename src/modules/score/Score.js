import { useEffect, useCallback } from "react";
import { connect } from "react-redux";

import Search from "../../shared/Search/Search";
import Table from "../../shared/Table/Table";
import { getScores } from "../../redux/actions/scores";

const Score = ({ scores, getScores }) => {
  const cols = (
    <tr>
      <th>Name</th>
      <th>Subject</th>
      <th>Score</th>
    </tr>
  );

  const getRows = (obj, index) => {
    return (
      <tr key={index}>
        <td>{obj.name}</td>
        <td>{obj.subject}</td>
        <td>{obj.score}</td>
      </tr>
    );
  };
  const searchHandler = useCallback((query) => getScores(query), [getScores]);
  useEffect(() => {
    getScores();
  }, [getScores]);

  return (
    <div className="container mt-3">
      <div className="mb-5">
        <Search onSearch={searchHandler} />
      </div>
      <div>
        <Table columns={cols} rows={scores.map(getRows)} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    scores: state.scores.list,
  };
};

/**
 *
 * This function to bind action creators
 * and access as props inside a component.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    // this is prop
    getScores: (query) => {
      // this is an action creator.
      dispatch(getScores(query));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Score);
