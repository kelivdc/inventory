import { Accessibility, Article, Category, ClearAll, ClearAllSharp, CompareArrows, ContentPaste, Dashboard, Dehaze, ExpandMore, FilterNone, People, Warehouse } from '@mui/icons-material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import React from 'react'
import Link from 'next/link';

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	borderTop: `0px solid ${theme.palette.divider}`,
	borderBottom: `0px solid ${theme.palette.divider}`,
	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&:before': {
		display: 'none',
	},
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
		{...props}
	/>
))(({ theme }) => ({
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(180deg)'
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(0),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(0),
	borderTop: '0px solid rgba(0, 0, 0, .125)',
}));


function Sidebar() {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<>
			<List>
				<Link href="/admin/dashboard">
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<Dashboard />
							</ListItemIcon>
							<ListItemText primary="Dashboard" />
						</ListItemButton>
					</ListItem>
				</Link>
			</List>
			<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<AccordionSummary expandIcon={<ExpandMore />}>
					Inventory
				</AccordionSummary>
				<AccordionDetails>
					<List disablePadding>
						<Link href="/admin/gudang/barang"><a>
							<ListItem disablePadding>
								<ListItemButton>
									<ListItemIcon>
										<Category />
									</ListItemIcon>
									<ListItemText primary="Barang" />
								</ListItemButton>
							</ListItem>
						</a></Link>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<ContentPasteSearchIcon />
								</ListItemIcon>
								<ListItemText primary="Persediaan" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<ContentPaste />
								</ListItemIcon>
								<ListItemText primary="Stok opname" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<CompareArrows />
								</ListItemIcon>
								<ListItemText primary="Mutasi" />
							</ListItemButton>
						</ListItem>
					</List>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
				<AccordionSummary expandIcon={<ExpandMore />}>
					Users
				</AccordionSummary>
				<AccordionDetails>
					<List disablePadding>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<Accessibility />
								</ListItemIcon>
								<ListItemText primary="Roles" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<People />
								</ListItemIcon>
								<ListItemText primary="List" />
							</ListItemButton>
						</ListItem>
					</List>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
				<AccordionSummary expandIcon={<ExpandMore />}>
					Settings
				</AccordionSummary>
				<AccordionDetails>
					<List disablePadding>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<Warehouse />
								</ListItemIcon>
								<ListItemText primary="Gudang" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<ClearAllSharp />
								</ListItemIcon>
								<ListItemText primary="Satuan" />
							</ListItemButton>
						</ListItem>
					</List>
				</AccordionDetails>
			</Accordion>
		</>
	)
}

export default Sidebar