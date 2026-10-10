import form_gridRaw from "./form-grid.ts?raw";
import form_sectionRaw from "./form-section.ts?raw";
import form_section_textareaRaw from "./form-section-textarea.ts?raw";
import label_accessoryRaw from "./label-accessory.ts?raw";
import settings_panelRaw from "./settings-panel.ts?raw";
import settings_rowRaw from "./settings-row.ts?raw";

export const sources = {
  FormGrid: form_gridRaw,
  FormSection: form_sectionRaw,
  FormSectionTextarea: form_section_textareaRaw,
  LabelAccessory: label_accessoryRaw,
  SettingsPanel: settings_panelRaw,
  SettingsRow: settings_rowRaw,
} as const;
