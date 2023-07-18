import React from "react";
import DataTable from "react-data-table-component";
import { Apod } from "../types/Apod";
import Colors from "../styles/Colors";
import { format, parse } from "date-fns";

const columns = [
  {
    name: "Title",
    selector: row => row.title,
    width: "20vw"
  },
  {
    name: "Date",
    selector: row =>
      format(parse(row.date, "yyyy-MM-dd", new Date()), "LLL d, yyyy"),
    width: "10vw"
  },
  {
    name: "Explanation",
    selector: row => row.explanation,
    width: "30vw"
  }
];

const customStyles = {
  headRow: {
    style: {
      backgroundColor: Colors.YELLOW
    }
  }
};

type Props = {
  data: Apod[];
  handleRowClick: (row, event) => void;
};

const Table = ({ data, handleRowClick }: Props) => {
  return (
    <DataTable
      columns={columns}
      data={data}
      highlightOnHover
      pointerOnHover
      customStyles={customStyles}
      onRowClicked={handleRowClick}
    />
  );
};

export default Table;
