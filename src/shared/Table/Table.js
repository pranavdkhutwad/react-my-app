import BTable from "react-bootstrap/Table";

const Table = ({ data, rows, columns }) => {
  return (
    <BTable striped bordered hover>
      <thead>{columns}</thead>
      <tbody>{rows}</tbody>
    </BTable>
  );
};

export default Table;
