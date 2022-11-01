import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

function Gudang() {
  return (
    <>
        <TableContainer component={Paper} elevation={0}>
            <Table sx={{minWidth: 200, maxWidth: 350, border: "solid 1px #d0d0d0"}} size="small" aria-label="a dense table" border="1">
                <TableHead>
                    <TableRow>
                        <TableCell>Gudang</TableCell>
                        <TableCell>Stok</TableCell>
                    </TableRow>                    
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>GOWA</TableCell>
                        <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Pare-pare</TableCell>
                        <TableCell>25</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Yogya</TableCell>
                        <TableCell>35</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </>
  )
}

export default Gudang