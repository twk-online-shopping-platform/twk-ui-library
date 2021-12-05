import * as React from 'react';
import './header.css';
import AppBar from '@mui/material/AppBar';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ReactElement } from 'react';

interface HeaderProps {
    searchAutoComplateList?: { label: string; id: number; }[],
    menuItems?: { 'id': number , 'title': string, 'handler': Function }[]
}

function MenuItemComponentList(props: HeaderProps){
    const menuItemComponent: Array<ReactElement> = [];
    if (props.menuItems && props.menuItems.length > 0) {
        props.menuItems.map((item) => <MenuItem key={item.id}>{item.title}</MenuItem>)
    }
    console.log('nums', menuItemComponent);
    return (<div>
        {menuItemComponent}
    </div>);
}

export const Header = (props: HeaderProps) => {
    const [anchorEl,] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const menuList = props.menuItems? <MenuItemComponentList menuItems={props.menuItems} /> : null;


    return ( <div data-testid='app-header'>
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
                        role="header-search-fld"
                        sx={{ width: 300 }}
                        renderInput={() => {
                            return (<TextField fullWidth label="fullWidth" id="fullWidth" />)
                        }} />
                    <Button variant='outlined'>Search</Button>
                    {props.menuItems && props.menuItems.length > 0 &&
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}>
                            {menuList}
                        </Menu>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    </div>);
}