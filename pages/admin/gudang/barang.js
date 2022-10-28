import {
  Box,
  Button,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import Head from "next/head";
import React, { useState } from "react";
import Admin from "../../../components/layouts/admin";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";

function Toolbars() {
  return (
    <GridToolbarContainer
      sx={{
        padding: "15px",
      }}
    >
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <Button variant="contained" color="success" size="small">
        Create
      </Button>
    </GridToolbarContainer>
  );
}

function Barang() {
  const [pageSize, setPageSize] = useState(10);

  const columns = (GridColDef = [
    { field: "kartu", headerName: "No. Kartu", width: 150 },
    {
      field: "nama",
      headerName: "Nama",
      width: 250,
      cellClassName: 'grid-nama-barang',      
      renderCell: (params) => {        
        return (
            <Link href={`/admin/gudang/barang/${params.row.id}`} passHref><a>{params.row.nama}</a></Link>
        )
      },
    },
    { field: "qty", headerName: "Qty.", width: 150 },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      type: 'number',
      filterable: false,
      width: 90,
      renderCell: (params) => {
        return (
          <Tooltip title="Delete" placement="right-end">
            <IconButton
              aria-label="delete"
              variant="outlined"
              size="small"
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        );
      },
    },
  ]);
  const rows = (GridRowsProp = [
    { id: 1, kartu: "001", nama: "Papan PVC NP001 4meter", qty: 10 },
    { id: 2, kartu: "002", nama: "Papan PVC NP002 4meter", qty: 5 },
    { id: 3, kartu: "003", nama: "Panpn PVC NP003 4meter", qty: 4 },
    { id: 4, kartu: "004", nama: "Papan PVC NP002 4meter", qty: 6 },
    { id: 5, kartu: "005", nama: "Papan PVC NP004NS 4meter", qty: 0 },
    { id: 6, kartu: "006", nama: "Papan PVC NP005 4meter", qty: 4 },
    { id: 7, kartu: "007", nama: "Papan PVC NP002 4meter", qty: 3 },
    { id: 8, kartu: "008", nama: "Papan PVC NP002 4meter", qty: 2 },
    { id: 9, kartu: "002", nama: "Papan PVC NP002 4meter", qty: 5 },
    { id: 10, kartu: "002", nama: "Papan PVC NP002 4meter" },
    { id: 11, kartu: "002", nama: "Papan PVC NP002 4meter" },
    { id: 12, kartu: "002", nama: "Papan PVC NP002 4meter" },
    { id: 13, kartu: "002", nama: "Papan PVC NP002 4meter" },
    { id: 14, kartu: "002", nama: "Papan PVC NP002 4meter" },
    { id: 15, kartu: "002", nama: "Papan PVC NP002 4meter" },
    { id: 16, kartu: "002", nama: "Papan PVC NP002 4meter" },
    { id: 17, kartu: "002", nama: "Papan PVC NP002 4meter" },
    { id: 18, kartu: "002", nama: "Papan PVC NP002 4meter" },
    { id: 19, kartu: "002", nama: "Papan PVC NP002 4meter" },
    { id: 20, kartu: "002", nama: "Papan PVC NP002 4meter" },
    { id: 21, kartu: "002", nama: "Papan PVC NP002 4meter" },
  ]);
  return (
    <>
      <Head>
        <title>Barang</title>
      </Head>
      <Admin title="Barang">
        <Box sx={{ bgcolor: "#fff", width: "100%" }}>
          <DataGrid
            // checkboxSelection
            rowHeight={30}
            headerHeight={35}
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            autoHeight
            rowsPerPageOptions={[5, 10, 20]}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            pagination
            sx={{
              "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: "600",
              },
            }}
            components={{
              Toolbar: Toolbars,
            }}
          />
        </Box>
      </Admin>
    </>
  );
}

export default Barang;
