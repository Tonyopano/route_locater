import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, ToolBar, Typography, InputBase, Box } from "@material-ui/core";
import { Search } from "@material-ui/icons/Search";

const Header = () => {
  return (
    <AppBar position="static">
      <ToolBar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Route locater
        </Typography>
        <Box display="flex">
            <Typography variant="h6" className={classes.title}>
              Explore new routes
            </Typography>
            <Autocomplete>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <searchIcon />
                </div>
                <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
              </div>
            </Autocomplete>
        </Box>
      </ToolBar>
    </AppBar>
  );
}

export default Header;
