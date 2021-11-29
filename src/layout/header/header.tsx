import * as React from 'react';
import './header.css';
import AppBar from '@mui/material/AppBar';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';
interface HeaderProps{
    searchAutoComplateList?: { label: string; id: number; }[]
}
export const Header = (props : HeaderProps)=>{
    return (<div data-testid='app-header'>
        <AppBar position='fixed'>
            <Autocomplete 
            options={props.searchAutoComplateList==null?[]:props.searchAutoComplateList}
            disablePortal
            role="header-search-fld"
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}/>
        </AppBar>
    </div>);
}