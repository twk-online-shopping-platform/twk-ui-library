import * as React from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

export const UserInfoDropDown = (props: any) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'auth-popover' : undefined;
    return (<div>
        <Button data-testid='user-account-btn' aria-describedby={id} variant="contained" onClick={handleClick}>
            <Avatar data-testid='user-account-avt' >H</Avatar> Handakina
        </Button>
        <Popover
            data-testid='user-account-dpd'
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}>
            <List sx={style} component="nav" aria-label="mailbox folders">
                <ListItem button>
                    <Typography>The content of the Popover.</Typography>
                </ListItem>
                <Divider />
                <ListItem button>
                    <Button data-testid='logout-btn' variant='text'>Logout</Button>
                </ListItem>
            </List>
        </Popover></div>
    );
}