import { AppBar, Box, Button, createTheme, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ThemeProvider, Toolbar, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import MyMenu from '../menu/MyMenu';
import Image from 'next/image';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Sidebar from '../Sidebar';

const drawerWidth = 220;

function Admin({children, title }) {
	const darkTheme = createTheme({
		palette: {
			mode: 'light',
			primary: {
			  light: '#757ce8',
			  main: '#3f50b5',
			  dark: '#231010',
			  contrastText: '#fff',
			},
			secondary: {
			  light: '#ff7961',
			  main: '#f44336',
			  dark: '#ba000d',
			  contrastText: '#000',
			},
		  },
	});
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<Box sx={{ display: 'flex' }}>
					<AppBar color="primary" component="nav"
						position="fixed"
						sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
					>
						<Toolbar variant="dense">
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
								{title}
							</Typography>
							<MyMenu />
						</Toolbar>
					</AppBar>
					<Drawer variant='permanent' anchor='left'
						sx={{
							width: drawerWidth,
							flexShrink: 0,
							'& .MuiDrawer-paper': {
								width: drawerWidth,
								boxSizing: 'border-box',								
							},
						}}
					>
						<Toolbar variant="dense" >
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">
								<Image src="/logo.png" width={100} height={30} />
							</Typography>
						</Toolbar>
						<Divider />
						<Sidebar />
					</Drawer>
					<Box sx={{
						padding: "20px",
						marginTop: "50px",
						width: "100%"
					}}>
						{children}
					</Box>
				</Box>
			</ThemeProvider>

		</>
	)
}

export default Admin