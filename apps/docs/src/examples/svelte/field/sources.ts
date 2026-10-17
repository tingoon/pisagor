import FormGrid from "./form-grid.svelte?raw";
import FormSection from "./form-section.svelte?raw";
import FormSectionTextarea from "./form-section-textarea.svelte?raw";
import LabelAccessory from "./label-accessory.svelte?raw";
import SettingsPanel from "./settings-panel.svelte?raw";
import SettingsRow from "./settings-row.svelte?raw";

export const imports = `import { … } from "@pisagor/svelte";`;

export const sources = {
  FormGrid,
  FormSection,
  FormSectionTextarea,
  LabelAccessory,
  SettingsPanel,
  SettingsRow,
} as const;
