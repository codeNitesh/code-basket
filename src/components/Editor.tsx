import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import ZoomOutMapRoundedIcon from "@mui/icons-material/ZoomOutMapRounded";
import ZoomInMapRoundedIcon from "@mui/icons-material/ZoomInMapRounded";

interface Props {
  title: string;
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
  return (
    <>
      <Box
        sx={{
          flex: editorExpanded ? 4 : 0,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          border: ".5px solid #666b7a",
        }}
      >
        <header className="d-flex justify-content-between align-items-center">
          <Typography sx={{ p: 0.5, color: "#d8ddf0" }} variant="subtitle2">
            {props.title}
          </Typography>
          {expandButton(editorExpanded, changeEditorExpand)}
        </header>
        <Box
          sx={{
            flex: 1,
            backgroundColor: props.title === "PREVIEW" ? "WHITE" : "#1d1e22",
          }}
        ></Box>
      </Box>
    </>
  );
}
