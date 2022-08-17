import React, { MouseEventHandler } from "react";
import "./Header.css";
import { MenuComponents, MenuItemProps } from "./MenuUtil";
import { AuthController, UserProps } from "./AuthController";
import {
  Grid,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  ButtonGroup,
  TextField,
  Typography,
} from "@mui/material";
import SearchField from "./SearchField";
import { createTheme, ThemeProvider } from "@mui/material";
import { blue, yellow, grey } from "@mui/material/colors";
import Logo from "../../assets/image/logo.png";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      contrastText: yellow[500],
    },
  },
});
export interface HeaderProps {
  searchAutoComplateList?: { label: string; id: number }[];
  menus?: MenuItemProps[];
  userData?: UserProps;
  search?: SearchProps;
}

export interface SearchProps {
  searchFieldHandler?: (value: string) => void;
  submitHanlder?: (value: string) => void;
}

const Header = (props: HeaderProps) => {
  const [searchValue, setSearchValue] = React.useState("");
  const handleSearchValueChange = (
    event: React.ChangeEvent<any>,
    handlers?: SearchProps
  ) => {
    setSearchValue(event.target.value);
    if (handlers && handlers.searchFieldHandler) {
      handlers.searchFieldHandler(event.target.value);
    }
  };

  const handleSearchSubmit = (handlers?: SearchProps) => {
    if (handlers && handlers.submitHanlder) {
      handlers.submitHanlder(searchValue);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        data-testid="app-header"
        position="fixed"
        sx={{
          gridTemplateColumns: "1fr",
          gridTemplateRows: "repeat(3, 1fr)",
          backgroundColor: "#e8eaed",
        }}
      >
        <Box
          sx={{
            display: "flex",
            color: "darkblue",
            gap: ".8rem",
            paddingLeft: ".8rem",
          }}
        >
          <Typography>Phone: 641-819-8136</Typography>
          <Typography>Email: handakina.fuchea@gmail.com</Typography>
        </Box>
        <Box
          data-testid="header-box"
          sx={{
            display: "grid",
            height: 120,
            gridTemplateColumns: "1fr 1fr 3fr 1fr",
            alignItems: "center",
            justifyItems: "center",
            paddingBottom: ".8rem",
            backgroundColor: "primary.dark",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 64,
            }}
            alt="Your logo."
            src={Logo}
          />
          <Box
            sx={{
              display: "flex",
              flexFlow: "column",
            }}
          >
            <Typography>Delivery to</Typography>
            <Typography
              sx={{
                textDecorationLine: "underline",
              }}
            >
              Street Address
            </Typography>
          </Box>
          <SearchField
            data-testid="search-field"
            id="search-field"
            required
            type="search"
            sx={{
              alignSelf: "end",
              justifySelf: "strech",
              width: "100%",
            }}
            placeholder="search"
            value={searchValue}
            onChange={(e: React.ChangeEvent<Element>) => {
              handleSearchValueChange(e, props.search);
            }}
          />
          <Box
            sx={{
              justifySelf: "center",
              alignSelf: "end",
            }}
          >
            {props.userData != undefined ? (
              <AuthController userData={props.userData} />
            ) : (
              <AuthController />
            )}
          </Box>
        </Box>
        <Toolbar>
          <MenuComponents menus={props.menus} />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
