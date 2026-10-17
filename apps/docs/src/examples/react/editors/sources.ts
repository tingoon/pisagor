import { EditableUserCardSource as EditableUserCard } from "./editable-user-card";
import { IdeLayoutSource as IdeLayout } from "./ide-layout";
import { RichTextToolbarSource as RichTextToolbar } from "./rich-text-toolbar";

export const imports = `import { … } from "@pisagor/react";`;

export const sources = {
  EditableUserCard,
  IdeLayout,
  RichTextToolbar,
} as const;
