import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

interface Props {
  title: string;
  buttonTxt: string;
  goToGitHubRepo: () => void;
}

export default function ElevateAppBar(props: Props) {
  return (
    <React.Fragment>
      <AppBar
        sx={{ backgroundColor: "#060606", borderBottom: ".5px solid #666b7a" }}
      >
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }} variant="h6">
            {props.title}
          </Typography>
          <Button onClick={props.goToGitHubRepo} color="inherit">
            {props.buttonTxt}
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
