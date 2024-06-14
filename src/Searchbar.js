import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useCallback } from "react";

export const Searchbar = ({ setRecipes }) => {
  const [query, setQuery] = useState("chicken");

  const fetchRecipes = useCallback(async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=ea8e6ff3&app_key=c0c09b44cd2cbbb1111c84e5bcc47bd4`
    );
    const data = await response.json();
    setRecipes(data.hits);
  }, [query, setRecipes]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <TextField
      label="Wyszukaj"
      variant="outlined"
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={fetchRecipes}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
        style: { paddingRight: '0' }  
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'primary.main',
          },
          '&:hover fieldset': {
            borderColor: 'primary.dark',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'primary.light',
          },
        },
        '& .MuiInputLabel-root': {
          color: 'black', 
          fontSize: '1rem', 
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: 'black', 
          fontSize: '1.2rem', 
        },
        '& .MuiInputLabel-shrink': {
          color: 'black', 
          fontSize: '1.2rem', 
        }
      }}
      fullWidth
    />
  );
};
