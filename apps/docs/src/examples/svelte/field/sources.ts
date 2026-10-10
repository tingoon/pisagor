import form_gridRaw from "./form-grid.svelte?raw";
import form_sectionRaw from "./form-section.svelte?raw";
import form_section_textareaRaw from "./form-section-textarea.svelte?raw";
import label_accessoryRaw from "./label-accessory.svelte?raw";
import settings_panelRaw from "./settings-panel.svelte?raw";
import settings_rowRaw from "./settings-row.svelte?raw";

export const sources = {
  FormGrid: form_gridRaw,
  FormSection: form_sectionRaw,
  FormSectionTextarea: form_section_textareaRaw,
  LabelAccessory: label_accessoryRaw,
  SettingsPanel: settings_panelRaw,
  SettingsRow: settings_rowRaw,
} as const;
