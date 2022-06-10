import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import ZoomOutMapRoundedIcon from "@mui/icons-material/ZoomOutMapRounded";
import ZoomInMapRoundedIcon from "@mui/icons-material/ZoomInMapRounded";
import "../App.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

interface Props {
  title: string;
  language: "css" | "xml" | "javascript";
  value: string;
  onCodeChange: (value: string) => void;
}

function expandButton(editorExpanded: boolean, changeEditorExpand: () => void) {
  return (
    <>
      {editorExpanded ? (
        <div onClick={changeEditorExpand}>
          <IconButton>
            <ZoomInMapRoundedIcon sx={{ m: 1, color: "#d8ddf0" }} />
          </IconButton>
        </div>
      ) : (
        <div onClick={changeEditorExpand}>
          <IconButton>
            <ZoomOutMapRoundedIcon sx={{ m: 1, color: "#d8ddf0" }} />
          </IconButton>
        </div>
      )}
    </>
  );
}

export default function Editor(props: Props) {
  const [editorExpanded, setEditorExpanded] = useState(true);

  const changeEditorExpand = () => {
    setEditorExpanded(!editorExpanded);
  };

  const handleEditorChange = (_editor: any, _data: string, value: string) => {
    props.onCodeChange(value);
  };

  return (
    <>
      <div
        className={`flex-grow-1 m-2 d-flex flex-column ${
          editorExpanded ? "" : "editorExpanded"
        }`}
        style={{
          border: ".5px solid #666b7a",
          flexBasis: 0,
        }}
      >
        <header className="d-flex justify-content-between align-items-center">
          <Typography
            sx={{ p: 0.5, pl: 2, color: "#d8ddf0" }}
            variant="subtitle2"
          >
            {props.title}
          </Typography>
          {expandButton(editorExpanded, changeEditorExpand)}
        </header>
        <ControlledEditor
          onBeforeChange={handleEditorChange}
          value={props.value}
          className="flex-grow-1 overflow-hidden"
          options={{
            lineWrapping: true,
            lint: true,
            mode: props.language,
            lineNumbers: true,
            theme: "material",
          }}
        />
      </div>
    </>
  );
}
