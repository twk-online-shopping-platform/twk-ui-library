import * as React from 'react';
import { MenuItem, Menu, Button, ButtonGroup, Popover } from '@mui/material';
import { TreeView, TreeItem } from '@mui/lab';
import { MouseEventHandler } from 'react';
import { HeaderProps } from './Header';
import { makeStyles } from '@mui/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandLessRounded } from '@mui/icons-material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const menuTextColor: string = "#ccc";
const useStyles = makeStyles(({
    menuButtonStyle: {
        color: menuTextColor,
        borderColor: menuTextColor,
        marginRight: "5px"
    },
    menuIcon:{
        color:'black'
    }
}))

export interface MenuItemProps {
    menuDetail: { 'id': number, 'title': string, 'open'?: boolean, 'handler': MouseEventHandler, 'menuItems'?: MenuItemProps[] }
}

interface MenuProps extends MenuItemProps {
    'handleClose': MouseEventHandler,
    'anchorEl': HTMLElement | null
}

export function MenuItemComponentList(props: MenuProps): React.ReactElement | null {
    const classes = useStyles();
    const open = Boolean(props.menuDetail.open);
    if (props.menuDetail.menuItems && props.menuDetail.menuItems.length > 0) {
        let menuItemComponent: Array<React.ReactElement> = [];
        menuItemComponent = props.menuDetail.menuItems.map((item) => {
            return (<TreeItem data-testid={'menu-item-' + props.menuDetail.id + '-' + item.menuDetail.id}
                onClick={item.menuDetail.handler} nodeId={'menu-item-' + props.menuDetail.id + '-' + item.menuDetail.id}
                key={item.menuDetail.id} label={item.menuDetail.title}/>);
        });
        return (
            <Popover
                id={'menu-' + props.menuDetail.id}
                open={open}
                anchorEl={props.anchorEl}
                onClose={props.handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}>
                <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandLessRounded/>}
                    defaultExpandIcon={<ExpandMoreIcon />}
                    sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                >
                    {menuItemComponent}
                </TreeView>
            </Popover>
        );
    } else {
        return null;
    }
}

export function MenuLableComponent(props: { 'id': number | string, 'title': string, 'handleClick': MouseEventHandler }) {
    const classes = useStyles();
    return (
        <Button
            data-testid={"menu-lbl-" + props.id}
            id={"menu-lbl-" + props.id}
            aria-haspopup="true"
            aria-controls={'menu-' + props.id}
            onClick={props.handleClick}
            className={classes.menuButtonStyle}
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
        <div>
            <MenuLableComponent id={props.menuDetail.id} key={props.menuDetail.id} handleClick={handleClick} title={props.menuDetail.title} />
            <MenuItemComponentList anchorEl={anchorEl} key={'menu-comp-key-' + props.menuDetail.id} menuDetail={menuDetail} handleClose={handleClose} />
        </div>
    );
}

export function MenuComponents(props: HeaderProps): React.ReactElement | null {
    let menuListComponent: Array<React.ReactElement> = [];

    if (props.menus && props.menus.length > 0) {
        menuListComponent = props.menus.map((item) => {
            return <MenuWrapper key={'menu-' + item.menuDetail.id} menuDetail={item.menuDetail} />
        });
        return (
            <ButtonGroup data-testid='menu-components'>
                {menuListComponent}
            </ButtonGroup>
        );
    } else {
        return null;
    }
}