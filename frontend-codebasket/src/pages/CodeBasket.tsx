import React, { useState, useEffect } from "react";
import ElevateAppBar from "../components/ElevatedAppBar";
import Editor from "../components/Editor";
import IFramePreview from "../components/IFramePreview";
import { useSearchParams } from "react-router-dom";

function goToGitHubRepo() {
  const githubURL = "https://github.com/codeNitesh/code-basket/";
  window.location.replace(githubURL);
}

export default function CodeBasket() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const [id, setId] = useState("");

  const [allUpdated, setAllUpdated] = useState(false);

  const updateBasket = async () => {
    const data = {
      html: JSON.stringify(html),
      css: JSON.stringify(css),
      js: JSON.stringify(javascript),
    };

    const response = await fetch(`http://localhost:9000/baskets/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return await response.json();
  };

  const getBasket = async (_id: string) => {
    const response = await fetch(`http://localhost:9000/baskets/${_id}`);
    return await response.json();
  };

  useEffect(() => {
    const _id = searchParams.get("_id");
    if (_id === null) return;
    setId(_id);
    getBasket(_id).then((data) => {
      console.log(data);
      const htmlData = data.html;
      const cssData = data.css;
      const jsData = data.js;
      setHtml(JSON.parse(htmlData));
      setCss(JSON.parse(cssData));
      setJavascript(JSON.parse(jsData));
    });

    setAllUpdated(true);
  }, []);

  useEffect(() => {
    if (id === "") return;
    if (allUpdated === false) return;
    const timeout = setTimeout(() => {
      setSrcDoc(`
          <html>
          <head>
            <style>${css}</style>
          </head>
          <body>${html}</body>
          <script type="module">${javascript}</script>
          </html>
      `);
      // localStorage.setItem("codeBasket_HTML", JSON.stringify(html));
      // localStorage.setItem("codeBasket_CSS", JSON.stringify(css));
      // localStorage.setItem("codeBasket_JAVASCRIPT", JSON.stringify(javascript));
      updateBasket();
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
