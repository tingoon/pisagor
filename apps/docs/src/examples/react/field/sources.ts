import form_gridRaw from "./form-grid.tsx?raw";
import form_sectionRaw from "./form-section.tsx?raw";
import form_section_textareaRaw from "./form-section-textarea.tsx?raw";
import label_accessoryRaw from "./label-accessory.tsx?raw";
import settings_panelRaw from "./settings-panel.tsx?raw";
import settings_rowRaw from "./settings-row.tsx?raw";

export const sources = {
  FormGrid: form_gridRaw,
  FormSection: form_sectionRaw,
  FormSectionTextarea: form_section_textareaRaw,
  LabelAccessory: label_accessoryRaw,
  SettingsPanel: settings_panelRaw,
  SettingsRow: settings_rowRaw,
} as const;
