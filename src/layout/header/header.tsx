import React, { MouseEventHandler } from 'react';
import './Header.css';
import { MenuComponents, MenuItemProps } from './MenuUtil'
import { AuthController, UserProps } from './AuthController';
import { Grid, AppBar, Toolbar, Button, IconButton } from '@mui/material';
import SearchField from './SearchField';
import { createTheme, ThemeProvider } from '@mui/material';
import { blue, yellow } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
            contrastText: yellow[500],
        },
    },
});
export interface HeaderProps {
    searchAutoComplateList?: { label: string; id: number; }[],
    menus?: MenuItemProps[],
    userData?: UserProps,
    search?: SearchProps
}

export interface SearchProps {
    searchFieldHandler?: (value: string) => void,
    submitHanlder?: (value: string) => void
}

const Header = (props: HeaderProps) => {
    const [searchValue, setSearchValue] = React.useState('');
    const handleSearchValueChange = (event: React.ChangeEvent<any>, handlers?: SearchProps) => {
        setSearchValue(event.target.value);
        if (handlers && handlers.searchFieldHandler) {
            handlers.searchFieldHandler(event.target.value);
        }
    };

    const handleSearchSubmit = (handlers?: SearchProps) => {
        if (handlers && handlers.submitHanlder) {
            handlers.submitHanlder(searchValue);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <AppBar data-testid='app-header'
                position='fixed'
                sx={{
                    lineHeight: 15,
                    height: 80,
                    backgroundColor: 'primary.dark',
                }}>
                <Toolbar>
                    <Grid container spacing={{ sx: .5, md: 1 }}>
                        <Grid item md={2}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}> logo </IconButton>
                        </Grid>
                        <Grid item md={3}>
                            <Grid container >
                                <Grid item>
                                    <SearchField
                                        required
                                        type="search"
                                        placeholder="search"
                                        value={searchValue} onChange={(e: React.ChangeEvent<Element>) => {
                                            handleSearchValueChange(e, props.search)
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Button data-testid='search-btn' variant='contained' onClick={() => {
                                        handleSearchSubmit(props.search)
                                    }}
                                    >Search</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={6}>
                            <MenuComponents menus={props.menus} />
                        </Grid>
                        <Grid item md={1}>
                            {props.userData != undefined ? <AuthController userData={props.userData} /> : <AuthController />}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </ThemeProvider>);
}

export default Header;

