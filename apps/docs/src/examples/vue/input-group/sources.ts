import CodeEditorInput from "./code-editor-input.vue?raw";
import InputGroupWithButton from "./input-group-with-button.vue?raw";
import InputGroupWithInnerLabel from "./input-group-with-inner-label.vue?raw";
import InputGroupWithMenu from "./input-group-with-menu.vue?raw";
import InputGroupWithNumberInput from "./input-group-with-number-input.vue?raw";
import InputGroupWithTooltip from "./input-group-with-tooltip.vue?raw";

export const imports = `import { … } from "@pisagor/vue";`;

export const sources = {
  CodeEditorInput,
  InputGroupWithButton,
  InputGroupWithInnerLabel,
  InputGroupWithMenu,
  InputGroupWithNumberInput,
  InputGroupWithTooltip,
} as const;
