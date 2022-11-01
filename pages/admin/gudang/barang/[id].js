import { Box, Chip, Divider, Grid, Tab, Tabs, Typography } from "@mui/material";
import Head from "next/head";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Gudang from "../../../../components/barang/gudang";
import Persediaan from "../../../../components/barang/persediaan";
import Admin from "../../../../components/layouts/admin";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Detail() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Head>
        <title>Papan PVC NP002 4meter</title>
      </Head>
      <Admin title="Detail Barang">
        <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
          <Box
            p={2}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{minWidth: '60%'}}>
            <Typography variant="h4">
              Papan PVC NP002 4meter              
            </Typography>
            <Typography color="#888">
                No:  GOW 0002
              </Typography>
              <Typography variant="h6" color="green">
                Stok: 20
              </Typography>
              </div>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} textAlign="right">
                Kategori Papan:
              </Grid>
              <Grid item xs={12} md={6}>
                Natapon 3
              </Grid>
              <Grid item xs={12} md={6} textAlign="right">
                Kategori Produk:
              </Grid>
              <Grid item xs={12} md={6}>
                Papan
              </Grid>
              <Grid item xs={12} md={6} textAlign="right">
                Unit:
              </Grid>
              <Grid item xs={12} md={6}>
                Lembaran
              </Grid>
            </Grid>
          </Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              borderTop: 1,
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tab label="Catatan Persediaan" {...a11yProps(0)} />
            <Tab label="Gudang" {...a11yProps(1)} />
            <Tab label="Mutasi" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Persediaan />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Gudang />
          </TabPanel>
          <TabPanel value={value} index={2}>
            Isi Tiga
          </TabPanel>
        </Box>
      </Admin>
    </>
  );
}

export default Detail;
