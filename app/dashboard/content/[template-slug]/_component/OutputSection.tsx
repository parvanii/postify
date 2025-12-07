"use client";

import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

interface Props {
  aiOutput?: string;
}

const OutputSection: React.FC<Props> = ({ aiOutput = "" }) => {
  const editorRef: any = useRef();

  useEffect(() => {
    if (!editorRef.current) return;
    try {
      const inst = editorRef.current.getInstance();
      // If editor is in wysiwyg mode, set HTML via setMarkdown still works for most inputs.
      // Use setMarkdown so it works both when preview/edit modes change.
      inst.setMarkdown(aiOutput ?? "");
    } catch (err) {
      console.error("Failed to update editor content:", err);
    }
  }, [aiOutput]);

  return (
    <div className="w-full p-2">
      <style>{`
        /* Purple editor bg */
        .toastui-editor-defaultUI,
        .toastui-editor-ww-container,
        .toastui-editor-md-container {
          background-color: #5523E8 !important;
        }

        /* WYSIWYG typing area → white text */
        .toastui-editor-ww-container .ProseMirror,
        .toastui-editor-ww-container .ProseMirror * {
          color: white !important;
        }

        /* Markdown content typing → white text */
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
        onChange={() =>
          console.log(editorRef.current?.getInstance?.().getMarkdown?.() ?? "")
        }
      />
    </div>
  );
};

export default OutputSection;
