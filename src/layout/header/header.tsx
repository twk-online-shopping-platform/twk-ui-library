import React from 'react';
import './Header.css';
import AppBar from '@mui/material/AppBar';
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
    userData?: UserProps,
    searchFieldHandler?: (value: string) => void
}

const Header = (props: HeaderProps) => {
    const [searchValue, setSearchValue] = React.useState('');
    const handleSearchValueChange = (event: React.ChangeEvent<any>, handler?: (value: string) => void) => {
        setSearchValue(event.target.value);
        console.log('def', handler);
        if (handler) {
            handler(event.target.value);
        }
    };

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
                    <TextField
                        required 
                        label="search" variant="outlined"
                        type="search" fullWidth
                        inputProps={{ "data-testid": "header-search-fld" }}
                        value={searchValue} onChange={(e:React.ChangeEvent<Element>)=>{handleSearchValueChange(e,props.searchFieldHandler)}}
                    />
                    <Button data-testid='search-btn' variant='contained'>Search</Button>
                    <MenuComponents menus={props.menus} />
                    {props.userData != undefined ? <AuthController userData={props.userData} /> : <AuthController />}
                </Toolbar>
            </AppBar>
        </Box>
    </div>);
}

export default Header;

