"use client";

import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

interface Props {
  aiOutput?: string;
}

const OutputSection: React.FC<Props> = ({ aiOutput = "" }) => {
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const instance = editorRef.current.getInstance();
    instance.setMarkdown(aiOutput);
  }, [aiOutput]);

  return (
    <div className="w-full max-w-[1200px] mx-auto p-2">

      <style>{`

        .toastui-editor-defaultUI,
        .toastui-editor-ww-container,
        .toastui-editor-md-container {
          background-color: #5523E8 !important;
        }

      
        .toastui-editor-ww-container .ProseMirror,
        .toastui-editor-ww-container .ProseMirror * {
          color: white !important;
        }

      
        .toastui-editor-contents,
        .toastui-editor-contents * {
          color: white !important;
        }
      `}</style>

      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        previewStyle="vertical"
        width="100%"
        height="97vh"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => {
          const markdown =
            editorRef.current?.getInstance().getMarkdown() ?? "";
          console.log(markdown);
        }}
      />
    </div>
  );
};

export default OutputSection;
