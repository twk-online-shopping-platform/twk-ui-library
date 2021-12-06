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
import { MouseEventHandler, ReactElement, ReactNode } from 'react';
import { NumbersRounded } from '@mui/icons-material';

export interface HeaderProps {
    searchAutoComplateList?: { label: string; id: number; }[],
    menus?: MenuItemProps[]
}
export interface MenuItemProps {
    menuDetail: { 'id': number, 'title': string, 'handler': MouseEventHandler, 'menuItems'?: MenuItemProps[] }
}

export function MenuItemComponentList(props: MenuItemProps): ReactElement | null {
    const [anchorEl,] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    if (props.menuDetail.menuItems && props.menuDetail.menuItems.length > 0) {
        let menuItemComponent: Array<ReactElement> = [];
        menuItemComponent = props.menuDetail.menuItems.map((item) => {
            // if (item.menuDetail.menuItems && item.menuDetail.menuItems.length > 0) {
            //     return (
            //         <div>
            //             <MenuComponent key={item.menuDetail.id} handler={item.menuDetail.handler} title={item.menuDetail.title} />
            //             <MenuItemComponentList key={item.menuDetail.id} menuDetail={item.menuDetail} />
            //         </div>
            //     );
            // } else {
            return <MenuItem onClick={item.menuDetail.handler} key={item.menuDetail.id}>{item.menuDetail.title}</MenuItem>;
            // }
        });
        console.log('nums', props.menuDetail.title + " : " + menuItemComponent.length);
        console.log('nums', menuItemComponent[1].props);
        return (
            <Menu data-testid="basic-menu"
                open={open}>
                  <MenuItem>test</MenuItem>;
            </Menu>
        );
    } else {
        return null;
    }
}

export function MenuComponent(props: { 'id': number , 'title': string, 'handler': MouseEventHandler }) {
    return (
        <Button
            data-testid={"menu-lbl-"+props.id}
            aria-haspopup="true"
            onClick={props.handler}
        > {props.title}
        </Button>
    );
}

export function MenuComponents(props: HeaderProps): ReactElement | null {
    let menuListComponent: Array<ReactElement> = [];

    if (props.menus && props.menus.length > 0) {
        menuListComponent = props.menus.map((item) => {
            return (
                <div>
                    <MenuComponent id={item.menuDetail.id} key={item.menuDetail.id} handler={item.menuDetail.handler} title={item.menuDetail.title} />
                    <MenuItemComponentList key={item.menuDetail.id} menuDetail={item.menuDetail} />
                </div>
            );
        });
        return (
            <div>
                {menuListComponent}
            </div>
        );
    } else {
        return null;
    }
}
export const Header = (props: HeaderProps) => {
   

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
                        role="header-search-fld"
                        sx={{ width: 300 }}
                        renderInput={() => {
                            return (<TextField fullWidth label="fullWidth" id="fullWidth" />)
                        }} />
                    <Button data-testid='search-btn' variant='outlined'>Search</Button>
                    <MenuComponents menus={props.menus} />
                </Toolbar>
            </AppBar>
        </Box>
    </div>);
}