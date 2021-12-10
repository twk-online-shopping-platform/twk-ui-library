import React from 'react';
import './Header.css';
import AppBar from '@mui/material/AppBar';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box'
import { MenuComponents, MenuItemProps } from './MenuUtil'
import { AuthController, UserProps } from './AuthController';

export interface HeaderProps {
    searchAutoComplateList?: { label: string; id: number; }[],
    menus?: MenuItemProps[],
    userData?: UserProps
}

const Header = (props: HeaderProps) => {

    return (<div data-testid='app-header'>
        <Box>
            <AppBar position='fixed'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}> logo </IconButton>
                    <Autocomplete
                        options={props.searchAutoComplateList == null ? [] : props.searchAutoComplateList}
                        disablePortal
                        data-testid="header-search-fld"
                        sx={{ width: 300 }}
                        renderInput={() => {
                            return (<TextField fullWidth label="fullWidth" id="fullWidth" />)
                        }} />
                    <Button data-testid='search-btn' variant='outlined'>Search</Button>
                    <MenuComponents menus={props.menus} />
                    { props.userData != undefined ? <AuthController userData={props.userData} /> : <AuthController /> }
                </Toolbar>
            </AppBar>
        </Box>
    </div>);
}

export default Header;