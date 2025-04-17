"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import TextAlign from "@tiptap/extension-text-align";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Toolbar from "./Toolbar";
//import Underline from "@tiptap/extension-underline";

const Tiptap = ({ onChange, content }:any) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),

    editorProps: {
      attributes: {
        spellcheck: "true",
        class: "w-full border-2 border-slate-400 rounded-md min-h-[150px] p-1",
      },
    },
    immediatelyRender: false,
  });

  return (
    <div className="flex flex-col gap-1">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
