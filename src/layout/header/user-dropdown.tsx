import * as React from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

export const UserInfoDropDown = (props: any) => {
    return (<div>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
            Open Popover
        </Button>
        <Popover
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
                    <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                </ListItem>
                <Divider />
                <ListItem button>
                    <Button data-testid='logout-btn' variant='text'>Logout</Button>
                </ListItem>
            </List>
        </Popover></div>
    );
}