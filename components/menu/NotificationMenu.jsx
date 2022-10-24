import { Notifications } from '@mui/icons-material'
import { Badge, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import React from 'react'

function NotificationMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const style = {
        fontSize: "0.85rem"
    }
    const notif_data = {
        fontWeight: "bold"
    }
    return (
        <>
            <Tooltip title="Notifications">
                <IconButton onClick={handleClick} color="inherit">
                    <Badge badgeContent={9} color="secondary" >
                        <Notifications fontSize='medium' />
                    </Badge>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="notification-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                sx={{
                    maxWidth: "300px",
                    fontSize: "0.7rem"
                }}
            >
                <MenuItem noWrap>
                    <Typography variant="inherit" noWrap sx={style}>
                        <Typography variant="inherit" sx={notif_data}>
                            Les Dinding PVC Gold 6cm Les Dinding PVC Gold 6cm
                        </Typography>
                        Qty bertambah 20 PCS
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem noWrap>
                    <Typography variant="inherit" noWrap sx={style}>
                        <Typography variant="inherit" sx={notif_data}>Papan PVC NP042RT 6meter</Typography>
                        Sudah diapprove
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem noWrap>
                    <Typography variant="inherit" noWrap sx={style}>
                        <Typography variant="inherit" sx={notif_data}>Permintaan Mutasi</Typography>
                        Papan PVC NP042RT 6meter [8 PCS]
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem noWrap>
                    <Typography variant="inherit" noWrap sx={style}>
                        <Typography variant="inherit" sx={notif_data}>Permintaan Mutasi</Typography>
                        Papan PVC NP042RT 6meter [12 PCS]
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem noWrap>
                    <Typography variant="inherit" noWrap sx={style}>
                        <Typography variant="inherit" sx={notif_data}>Papan PVC NP042RT 6meter</Typography>
                        QTY dibawah Minimum
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <Typography variant="inherit" noWrap sx={style}>
                        <Typography variant="inherit" sx={notif_data}>SO 00090</Typography>
                        Ditunda
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <Typography variant="inherit" noWrap sx={style}>
                        <Typography variant="inherit" sx={notif_data}>SO 00101</Typography>
                        Menunggu approval
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <Typography variant="inherit" noWrap sx={style}>
                        View more ...
                    </Typography>
                </MenuItem>
            </Menu>
        </>
    )
}

export default NotificationMenu