import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

// import { ModuleRegistry } from "@ag-grid-community/core";
// import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
// ModuleRegistry.registerModules([ClientSideRowModelModule]);

export default function GridTable() {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    {
      "Course ID": "Tesla",
      Created: "Model Y",
      "No. of Students": 64950,
    },
    {
      "Course ID": "Ford",
      Created: "F-Series",
      "No. of Students": 33850,
    },
    {
      "Course ID": "Toyota",
      Created: "Corolla",
      "No. of Students": 29600,
    },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "Course ID" },
    { field: "Created" },
    { field: "No. of Students" },
    { field: "Average Grade" },
    { field: "Submitted" },
    { field: "Status" },
  ]);

  const defaultColDef = {
    flex: 1,
  };

  // Container: Defines the grid's theme & dimensions.
  return (
    <div
      className={"ag-theme-quartz"}
      style={{ width: "100%", height: "100%" }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
}
