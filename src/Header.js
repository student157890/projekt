import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar(props) {
  const gradient = 'linear-gradient(90deg, red 0%, orange 16.6%, yellow 33.3%, green 50%, blue 66.6%, indigo 83.3%, violet 100%)';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundImage: gradient }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Recipe finder
            <Typography variant="subtitle1" component="div">
              search for your own recipes
            </Typography>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
