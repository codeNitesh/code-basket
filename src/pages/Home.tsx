import React from "react";
import Typography from "@mui/material/Typography";
import ElevateAppBar from "../components/ElevatedAppBar";

function goToGitHubRepo() {
  const githubURL = "https://github.com/codeNitesh/code-basket/";
  window.location.replace(githubURL);
}

export default function Home() {
  return (
    <>
      <ElevateAppBar
        title="CodeBasket"
        buttonTxt="GitHub Repo"
        goToGitHubRepo={goToGitHubRepo}
      />
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
