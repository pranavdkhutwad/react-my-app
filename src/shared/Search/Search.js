import React, { useState, useCallback } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function areEqual(prevProps, nextProps) {
  if (prevProps.onSearch !== nextProps.onSearch) {
    return false;
  }

  return true;
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
}
const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const changeQueryHandler = useCallback(
    (event) => setQuery(event.target.value),
    []
  );

  return (
    <Card>
      <Card.Body>
        <form>
          <div className="mb-3">
            <input
              placeholder="Search"
              className="form-control"
              type="text"
              name="search"
              value={query}
              onChange={changeQueryHandler}
            />
          </div>
          <div>
            <Button onClick={() => onSearch(query)} variant="primary">
              Search
            </Button>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
};

export default React.memo(Search, areEqual);
