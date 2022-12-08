import React from "react";

interface Props {
  srcDoc: string;
}

export default function IFramePreview(props: Props) {
  return (
    <>
      <iframe
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
        srcDoc={props.srcDoc}
      />
    </>
  );
}
