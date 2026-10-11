import form_gridRaw from "./form-grid.vue?raw";
import form_sectionRaw from "./form-section.vue?raw";
import form_section_textareaRaw from "./form-section-textarea.vue?raw";
import label_accessoryRaw from "./label-accessory.vue?raw";
import settings_panelRaw from "./settings-panel.vue?raw";
import settings_rowRaw from "./settings-row.vue?raw";

export const sources = {
  FormGrid: form_gridRaw,
  FormSection: form_sectionRaw,
  FormSectionTextarea: form_section_textareaRaw,
  LabelAccessory: label_accessoryRaw,
  SettingsPanel: settings_panelRaw,
  SettingsRow: settings_rowRaw,
} as const;
