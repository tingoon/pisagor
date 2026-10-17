import EditableUserCard from "./editable-user-card.svelte?raw";
import IdeLayout from "./ide-layout.svelte?raw";
import RichTextToolbar from "./rich-text-toolbar.svelte?raw";

export const imports = `import { … } from "@pisagor/svelte";`;

export const sources = {
  EditableUserCard,
  IdeLayout,
  RichTextToolbar,
} as const;
