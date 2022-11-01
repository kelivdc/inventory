import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

function createData(warna, tanggal, tanda_terima, surat_jalan, catatan, masuk, keluar, stok, creator) {
  return { warna, tanggal, tanda_terima, surat_jalan, catatan, masuk, keluar, stok, creator }
}

const rows = [
  createData('#cfeaeb','', '', '', 'SALDO AWAL/LANJUTAN BULAN LALU', '', '','150','Budi'),
  createData('','14/03/2022','00889', '00890', '', '', '15','135','Budi'),
  createData('','16/03/2022','00889', '00890', '', '', '39','96','Budi'),
  createData('','19/03/2022','00889', '00890', '', '', '12','84','Budi'),
  createData('','21/03/2022','00889', '00890', '', '', '15','69','Budi'),
  createData('','22/03/2022','00889', '00890', '', '', '1','68','Budi'),
  createData('','23/03/2022','00889', '00890', '', '', '1','67','Budi'),
  createData('','24/03/2021','00889', '00890', '', '', '180','-113','Budi'),
  createData('#ffaeae','28/03/2022', '', '', 'STOK OPNAME', '', '','129','Budi'),
]

function Persediaan() {  
  return (
    <>
      <TableContainer component={Paper} elevation={0}>
        <Table sx={{minWidth: 650, border: "solid 1px #d0d0d0"}} size="small" aria-label="a dense table" border="1">
          <TableHead>
            <TableRow>
              <TableCell>Tanggal</TableCell>
              <TableCell>No. Tanda Terima</TableCell>
              <TableCell>No. Surat Jalan</TableCell>
              <TableCell>Catatan</TableCell>
              <TableCell>Masuk</TableCell>
              <TableCell>Keluar</TableCell>
              <TableCell>Stok</TableCell>
              <TableCell>Creator</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.tanggal} sx={{bgcolor: row.warna}}>
                <TableCell component="th" scope="row">{row.tanggal}</TableCell>
                <TableCell>{row.tanda_terima}</TableCell>
                <TableCell>{row.surat_jalan}</TableCell>
                <TableCell>{row.catatan}</TableCell>
                <TableCell align="right">{row.masuk}</TableCell>
                <TableCell align="right">{row.keluar}</TableCell>
                <TableCell align="right">{row.stok}</TableCell>
                <TableCell>{row.creator}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Persediaan;
