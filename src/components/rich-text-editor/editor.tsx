"use client";

import { FC } from "react";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ControllerRenderProps } from "react-hook-form";
import MenuBar from "@/components/rich-text-editor/menu-bar";
import { CourseSchemaType } from "@/lib/zod-schemas";

type Props = { field: ControllerRenderProps<CourseSchemaType> };

const RichTextEditor: FC<Props> = ({ field }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "min-h-[300px] p-4 focus:outline-none prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert !w-full !max-w-none",
      },
    },
    onUpdate: ({ editor }) => {
      field.onChange(JSON.stringify(editor.getJSON()));
    },
    content:
      typeof field.value === "string" && field.value
        ? JSON.parse(field.value)
        : "<p>Hello World</p>",
    immediatelyRender: false,
  });

  return (
    <div className="border-input dark:bg-input/30 w-full overflow-hidden rounded-lg border">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
