import { Fragment } from "react";

function Table({ data, config }) {
  const renderedHeaders = config.map((column) => {
    return column.header ? (
      <Fragment key={column.label}>{column.header()}</Fragment>
    ) : (
      <th key={column.label}>{column.label}</th>
    );
  });

  const renderedBody = data.map((row) => (
    <tr key={row.name} className="border-b">
      {config.map((column) => (
        <td key={column.label} className="p-3">
          {column.render(row)}
        </td>
      ))}
    </tr>
  ));

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedBody}</tbody>
    </table>
  );
}

export default Table;
