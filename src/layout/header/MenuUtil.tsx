import * as React from 'react';
import { MenuItem, Menu, Button, Grid } from '@mui/material';
import { MouseEventHandler } from 'react';
import { HeaderProps } from './Header';

export interface MenuItemProps {
    menuDetail: { 'id': number, 'title': string, 'open'?: boolean, 'handler': MouseEventHandler, 'menuItems'?: MenuItemProps[] }
}

interface MenuProps extends MenuItemProps {
    'handleClose': MouseEventHandler,
}

export function MenuItemComponentList(props: MenuProps): React.ReactElement | null {
    const open = Boolean(props.menuDetail.open);
    if (props.menuDetail.menuItems && props.menuDetail.menuItems.length > 0) {
        let menuItemComponent: Array<React.ReactElement> = [];
        menuItemComponent = props.menuDetail.menuItems.map((item) => {
            return <MenuItem data-testid={'menu-item-' + props.menuDetail.id + '-' + item.menuDetail.id} onClick={item.menuDetail.handler} key={item.menuDetail.id}>{item.menuDetail.title}</MenuItem>;
        });
        return (
            <Menu id={'menu-' + props.menuDetail.id}
                aria-labelledby={"menu-lbl-" + props.menuDetail.id}
                data-testid={'menu-' + props.menuDetail.id}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={props.handleClose}>
                {menuItemComponent}
            </Menu>
        );
    } else {
        return null;
    }
}

export function MenuLableComponent(props: { 'id': number | string, 'title': string, 'handleClick': MouseEventHandler }) {
    return (

        <Button
            data-testid={"menu-lbl-" + props.id}
            id={"menu-lbl-" + props.id}
            aria-haspopup="true"
            aria-controls={'menu-' + props.id}
            variant="contained"
            onClick={props.handleClick}
        > {props.title}
        </Button>

    );
}

export function MenuWrapper(props: MenuItemProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const menuDetail = {
        ...props.menuDetail,
        open: open
    };
    return (
        <Grid item >
            <MenuLableComponent id={props.menuDetail.id} key={props.menuDetail.id} handleClick={handleClick} title={props.menuDetail.title} />
            <MenuItemComponentList key={'menu-comp-key-' + props.menuDetail.id} menuDetail={menuDetail} handleClose={handleClose} />
        </Grid>
    );
}

export function MenuComponents(props: HeaderProps): React.ReactElement | null {
    let menuListComponent: Array<React.ReactElement> = [];

    if (props.menus && props.menus.length > 0) {
        menuListComponent = props.menus.map((item) => {
            return <MenuWrapper key={'menu-' + item.menuDetail.id} menuDetail={item.menuDetail} />
        });
        return (
            <Grid container spacing={{ xs: .3, md: 1 }} data-testid='menu-components'>
                {menuListComponent}
            </Grid>
        );
    } else {
        return null;
    }
}