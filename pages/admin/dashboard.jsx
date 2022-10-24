import { Apps } from '@mui/icons-material'
import { Box, Card, CardContent, Grid, IconButton, Paper, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import Admin from '../../components/layouts/admin'

function Dashboard() {
	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>
			<Admin title="Dashboard">
				<Typography component="div" variant="h5" fontWeight="bold" color="#0000ff">Minggu ini</Typography>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={4}>
						<Grid item xs={12} md={4}>
							<Card elevation={1} sx={{ width: "100%" }}>
								<CardContent>
									<Typography component="div" variant="h6" fontWeight="bold">Terbaru</Typography>
									<Typography component="div" variant="h6" fontWeight="bold" textAlign="right" mt={4}>
										<IconButton size="large" color="secondary">
											6 item
										</IconButton>
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} md={4}>
							<Card elevation={1} sx={{ width: "100%" }}>
								<CardContent>
									<Typography component="div" variant="h6" fontWeight="bold">Terlaris</Typography>
									<Typography component="div" variant="h6" fontWeight="bold" textAlign="right" mt={4}>
										<IconButton size="large" color="success">
											3 item
										</IconButton>
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} md={4}>
							<Card elevation={1} sx={{ width: "100%" }}>
								<CardContent>
									<Typography component="div" variant="h6" fontWeight="bold">Returned Items</Typography>
									<Typography component="div" variant="h6" fontWeight="bold" textAlign="right" mt={4}>
										<IconButton size="large" color="error">
											5 item
										</IconButton>
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Admin>
		</>
	)
}

export default Dashboard