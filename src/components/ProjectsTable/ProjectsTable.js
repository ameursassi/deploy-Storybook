import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import styles from "./style";

export default function ProjectsTable({
  dataTable,
  columns,
  messageEmptyData,
}) {
  const classes = styles();

  return (
    <>
      {dataTable.length === 0 ? (
        <div className={classes.availableTours}>{messageEmptyData}</div>
      ) : (
        <TableContainer>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead style={{ backgroundColor: "#e2def3" }}>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell key={index} align={column.align}>
                    {column.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {columns[0].values.map((_, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((row, colIndex) => (
                    <TableCell key={colIndex} align={row.align}>
                      {row.values[rowIndex]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
