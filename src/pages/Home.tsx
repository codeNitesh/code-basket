import Typography from "@mui/material/Typography";
import React from "react";

export default function Home() {
  return (
    <>
      <Typography sx={{ marginTop: "50px" }} variant="h2" component="div">
        {"Welcome to CodeBasket"}
      </Typography>
      <Typography variant="h5">
        {
          "An online code editor for HTML, CSS, JavaScript code snippets in React.js"
        }
      </Typography>
    </>
  );
}
