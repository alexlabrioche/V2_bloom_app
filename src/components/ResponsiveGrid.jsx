import React from "react";
import { ResponsiveContext, Grid } from "grommet";

const columns = {
  small: ["auto"],
  medium: ["auto", "auto"],
  large: ["auto", "auto", "auto"],
  xlarge: ["auto", "auto", "auto"],
};

const rows = {
  small: ["none", "none", "none"],
  medium: ["none", "none"],
  large: ["none"],
  xlarge: ["none"],
};

export default function Responsive({
  children,
  overrideColumns,
  overrideRows,
  areas,
  ...props
}) {
  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        // Take into consideration if not array is sent but a simple string
        let columnsVal = columns;
        if (columns) {
          if (columns[size]) {
            columnsVal = columns[size];
          }
        }

        let rowsVal = rows;
        if (rows) {
          if (rows[size]) {
            rowsVal = rows[size];
          }
        }

        // Also if areas is a simple array not an object of arrays for
        // different sizes
        let areasVal = areas;
        if (areas && !Array.isArray(areas)) areasVal = areas[size];

        return (
          <Grid
            {...props}
            areas={!areasVal ? undefined : areasVal}
            rows={!rowsVal ? size : rowsVal}
            columns={!columnsVal ? size : columnsVal}
          >
            {children}
          </Grid>
        );
      }}
    </ResponsiveContext.Consumer>
  );
}
