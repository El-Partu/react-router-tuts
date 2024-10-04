import { PropTypes } from "prop-types";
function Table({ tableHead, tableData }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {tableHead.map((data, index) => (
              <th key={index}>{data}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {tableData.map((data, index) => (
              <td key={index}>{data}</td>
            ))}
          </tr>
          {/* <tr>
            {tableData.map((data, index) => (
              <td key={index}>{data}</td>
            ))}
          </tr>{" "}
          <tr>
            {tableData.map((data, index) => (
              <td key={index}>{data}</td>
            ))}
          </tr>{" "}
          <tr>
            {tableData.map((data, index) => (
              <td key={index}>{data}</td>
            ))}
          </tr>{" "}
          <tr>
            {tableData.map((data, index) => (
              <td key={index}>{data}</td>
            ))}
          </tr>{" "}
          <tr>
            {tableData.map((data, index) => (
              <td key={index}>{data}</td>
            ))}
          </tr>{" "}
          <tr>
            {tableData.map((data, index) => (
              <td key={index}>{data}</td>
            ))}
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  tableHead: PropTypes.array,
  tableData: PropTypes.array,
};
export default Table;
