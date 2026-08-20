import preview from "#/storybook/preview";
import { FormGrid } from "./form-grid";
import { FormSection } from "./form-section";
import { FormSectionTextarea } from "./form-section-textarea";
import { LabelAccessory } from "./label-accessory";
import { SettingsPanel } from "./settings-panel";
import { SettingsRow } from "./settings-row";

const meta = preview.meta({
  component: FormGrid,
  parameters: {
    docs: {
      description: {
        component: "Field layout compositions for grids, sections, labels, and settings rows.",
      },
    },
  },
  title: "Recipes/Forms/Field",
});

export const FormGridStory = meta.story({
  render: () => ({
    components: { FormGrid },
    template: `<FormGrid />`,
  }),
});

export const FormSectionStory = meta.story({
  render: () => ({
    components: { FormSection },
    template: `<FormSection />`,
  }),
});

export const FormSectionTextareaStory = meta.story({
  render: () => ({
    components: { FormSectionTextarea },
    template: `<FormSectionTextarea />`,
  }),
});

export const LabelAccessoryStory = meta.story({
  render: () => ({
    components: { LabelAccessory },
    template: `<LabelAccessory />`,
  }),
});

export const SettingsPanelStory = meta.story({
  render: () => ({
    components: { SettingsPanel },
    template: `<SettingsPanel />`,
  }),
});

export const SettingsRowStory = meta.story({
  render: () => ({
    components: { SettingsRow },
    template: `<SettingsRow />`,
  }),
});
