import * as React from "react";
import InputUnstyled, { InputUnstyledProps } from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const SearchField = (props: any) => {
  return (
    <Box
      sx={{
        ...props.sx,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Autocomplete
        id="search-autocomplete"
        sx={{
          minWidth: "200px",
          flexGrow: 1,
        }}
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            sx={{
              justifySelf: "stretch",
              backgroundColor: "white",
              borderRadius: "8px",
              height: "3rem",
            }}
            placeholder={props.placeholder}
            {...params}
          />
        )}
      />
      <Button
        variant="contained"
        sx={{
          borderRadius: "8px",
          height: "3rem",
        }}
      >
        Search
      </Button>
    </Box>
  );
};

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
];

export default SearchField;
