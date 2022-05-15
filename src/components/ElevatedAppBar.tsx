import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { Button } from "@mui/material";

interface Props {
  title: string;
  buttonTxt: string;
  goToGitHubRepo: ()=> void;
}

export default function ElevateAppBar(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }} variant="h6" component="div">
            {props.title}
          </Typography>
          <Button onClick={props.goToGitHubRepo} color="inherit">{props.buttonTxt}</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
