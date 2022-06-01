import React, { useState, useEffect } from "react";
import ElevateAppBar from "../components/ElevatedAppBar";
import Editor from "../components/Editor";
import IFramePreview from "../components/IFramePreview";

function goToGitHubRepo() {
  const githubURL = "https://github.com/codeNitesh/code-basket/";
  window.location.replace(githubURL);
}

export default function CodeBasket() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
          <html>
          <head>
            <style>${css}</style>
          </head>
          <body>${html}</body>
          <script>${javascript}</script>
          </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, javascript]);

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
      <div
        style={{
          display: "flex",
        }}
      >
        <Editor
          title="HTML"
          language="xml"
          value={html}
          onCodeChange={setHtml}
        ></Editor>
        <Editor
          title="CSS"
          language="css"
          value={css}
          onCodeChange={setCss}
        ></Editor>
        <Editor
          title="JAVASCRIPT"
          language="javascript"
          value={javascript}
          onCodeChange={setJavascript}
        ></Editor>
      </div>
      <div
        style={{
          flexGrow: 1,
          margin: 10,
          marginTop: 0,
          height: "45vh",
          backgroundColor: "#FFFFFF",
        }}
      >
        <IFramePreview srcDoc={srcDoc} />
      </div>
    </div>
  );
}
