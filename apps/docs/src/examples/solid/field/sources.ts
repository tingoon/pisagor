import { FormGridSource as FormGrid } from "./form-grid";
import { FormSectionSource as FormSection } from "./form-section";
import { FormSectionTextareaSource as FormSectionTextarea } from "./form-section-textarea";
import { LabelAccessorySource as LabelAccessory } from "./label-accessory";
import { SettingsPanelSource as SettingsPanel } from "./settings-panel";
import { SettingsRowSource as SettingsRow } from "./settings-row";

export const imports = `import { … } from "@pisagor/solid";`;

export const sources = {
  FormGrid,
  FormSection,
  FormSectionTextarea,
  LabelAccessory,
  SettingsPanel,
  SettingsRow,
} as const;
