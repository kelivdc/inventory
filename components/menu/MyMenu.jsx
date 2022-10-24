import { Avatar, IconButton, Box, Typography, Button, Badge, Tooltip, useTheme, createTheme } from '@mui/material'
import BuildIcon from '@mui/icons-material/Build';
import MailIcon from '@mui/icons-material/Mail';
import React, { useState } from 'react'
import { LightMode, ListAltOutlined } from '@mui/icons-material';
import AccountMenu from './AccountMenu';
import NotificationMenu from './NotificationMenu';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function MyMenu() {

    return (
        <>
            <Typography>
                Gudang: GOWA |
            </Typography>
            <Tooltip title="Histories">
                <IconButton color="inherit">
                    <ListAltOutlined fontSize='medium' />
                </IconButton>
            </Tooltip>
            <Tooltip title="Messages">
                <IconButton color="inherit">
                    <Badge badgeContent={3} color="secondary">
                        <MailIcon fontSize='medium' />
                    </Badge>
                </IconButton>
            </Tooltip>
            <NotificationMenu />
            <AccountMenu />
        </>
    )
}

export default MyMenu