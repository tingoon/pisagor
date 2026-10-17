import EditableUserCard from "./editable-user-card.vue?raw";
import IdeLayout from "./ide-layout.vue?raw";
import RichTextToolbar from "./rich-text-toolbar.vue?raw";

export const imports = `import { … } from "@pisagor/vue";`;

export const sources = {
  EditableUserCard,
  IdeLayout,
  RichTextToolbar,
} as const;
