import { Key, Logout, Person, PersonAdd, Settings, Warehouse } from '@mui/icons-material'
import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import React from 'react'

function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Tooltip title="John Due">
                <IconButton onClick={handleClick}>
                    <Avatar alt="Remy Sharp" src="/avatar.jpg" sx={{ width: 30, height: 30 }} />                    
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <ListItemIcon>
                        <Person fontSize="small" />
                    </ListItemIcon>
                    Profile
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Warehouse fontSize="small" />
                    </ListItemIcon>
                    Ganti gudang
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <Key fontSize="small" />
                    </ListItemIcon>
                    Ganti Password
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    )
}

export default AccountMenu