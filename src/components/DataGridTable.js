import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

function DataGridTable({ endpoint }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios.get(endpoint).then((response) => {
        setData(response.data.drinks);
      });
    };

    getData();
  }, [endpoint, setData]);

  const rows = data.map((row, index) => {
    return {
      id: index + 1,
      ...row,
    };
  });

  const columns =
    data.length > 0
      ? Object.keys(data[0]).map((key) => ({
          field: key,
          headerName: key,
          width: 150,
        }))
      : [];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </div>
  );
}

export default DataGridTable;
