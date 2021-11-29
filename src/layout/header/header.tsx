import * as React from 'react';
import './header.css';
import AppBar from '@mui/material/AppBar';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

interface HeaderProps {
    searchAutoComplateList?: { label: string; id: number; }[]
}

export const Header = (props: HeaderProps) => {
    return (<div data-testid='app-header'>
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
                        return (<TextField id="standard-basic" label="Standard" variant="standard" />)
                    }} />
                <Button variant='contained'>Search</Button>
            </Toolbar>
        </AppBar>
    </div>);
}