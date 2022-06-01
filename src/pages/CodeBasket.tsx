import React from "react";
import ElevateAppBar from "../components/ElevatedAppBar";
import Editor from "../components/Editor";

function goToGitHubRepo() {
  const githubURL = "https://github.com/codeNitesh/code-basket/";
  window.location.replace(githubURL);
}

export default function CodeBasket() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#060606",
      }}
    >
      <ElevateAppBar
        title="CodeBasket"
        buttonTxt="GitHub Repo"
        goToGitHubRepo={goToGitHubRepo}
      />
      <div style={{ display: "flex", flexGrow: 1, gap: 10, margin: 10 }}>
        <Editor title="HTML"></Editor>
        <Editor title="CSS"></Editor>
        <Editor title="JAVASCRIPT"></Editor>
      </div>

      <div style={{ flexGrow: 1, margin: 10, marginTop: 0 }}>
        <Editor title="PREVIEW"></Editor>
      </div>
    </div>
  );
}
