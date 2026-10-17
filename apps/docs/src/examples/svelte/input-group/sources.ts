import CodeEditorInput from "./code-editor-input.svelte?raw";
import InputGroupWithButton from "./input-group-with-button.svelte?raw";
import InputGroupWithInnerLabel from "./input-group-with-inner-label.svelte?raw";
import InputGroupWithMenu from "./input-group-with-menu.svelte?raw";
import InputGroupWithNumberInput from "./input-group-with-number-input.svelte?raw";
import InputGroupWithTooltip from "./input-group-with-tooltip.svelte?raw";

export const imports = `import { … } from "@pisagor/svelte";`;

export const sources = {
  CodeEditorInput,
  InputGroupWithButton,
  InputGroupWithInnerLabel,
  InputGroupWithMenu,
  InputGroupWithNumberInput,
  InputGroupWithTooltip,
} as const;
