"use client";

import React from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

const OutputSection = () => {
  return (
    <div className="w-full p-2">

<style>{`
  /* Purple background */
  .toastui-editor-defaultUI,
  .toastui-editor-ww-container,
  .toastui-editor-md-container {
    background-color: #5523E8 !important;
  }

  /* Only typing area becomes white text */
  .ProseMirror {
    color: white !important;
  }

  /* Markdown typing text (left panel in split mode) */
  .toastui-editor-contents {
    color: white !important;
  }
`}</style>


      <Editor
        initialValue="Start writing here..."
        previewStyle="vertical"
        width="50%"
        height="97vh"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </div>
  );
};

export default OutputSection;
