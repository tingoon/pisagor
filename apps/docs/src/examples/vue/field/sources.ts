import FormGrid from "./form-grid.vue?raw";
import FormSection from "./form-section.vue?raw";
import FormSectionTextarea from "./form-section-textarea.vue?raw";
import LabelAccessory from "./label-accessory.vue?raw";
import SettingsPanel from "./settings-panel.vue?raw";
import SettingsRow from "./settings-row.vue?raw";

export const imports = `import { … } from "@pisagor/vue";`;

export const sources = {
  FormGrid,
  FormSection,
  FormSectionTextarea,
  LabelAccessory,
  SettingsPanel,
  SettingsRow,
} as const;
