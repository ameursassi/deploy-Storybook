import React from "react";
import Paper from "@material-ui/core/Paper";
import ProjectsTable from "../ProjectsTable/ProjectsTable";
import styles from "./style";
import SubHeader from "../SubHeader/SubHeader";

export default function ListProjects() {
  const classes = styles();

  const columns = [
    {
      name: "Title 1",
      align: "left",
      values: ["value 1", "value 2", "value 3", "value 4"],
    },
    {
      name: "Title 2",
      align: "center",
      values: ["value 1", "value 2", "value 3", "value 4"],
    },
    {
      name: "Title 3",
      align: "center",
      values: ["value 1", "value 2", "value 3", "value 4"],
    },
    {
      name: "Title 4",
      align: "center",
      values: ["value 1", "value 2", "value 3", "value 4"],
    },
    {
      name: "Title 5",
      align: "center",
      values: ["value 1", "value 2", "value 3", "value 4"],
    },
  ];

  return (
    <>
      <SubHeader />
      <Paper className={classes.pageContent}>
        <ProjectsTable
          dataTable={["data"]}
          columns={columns}
          messageEmptyData="Aucun Projet disponible actuellement"
        />
      </Paper>
    </>
  );
}
