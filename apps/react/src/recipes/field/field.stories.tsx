import { Fragment } from "react";
import preview from "#/storybook/preview";
import { FormGrid as FormGridRecipe } from "./form-grid";
import { FormSection as FormSectionRecipe } from "./form-section";
import { FormSectionTextarea as FormSectionTextareaRecipe } from "./form-section-textarea";
import { LabelAccessory as LabelAccessoryRecipe } from "./label-accessory";
import { SettingsPanel as SettingsPanelRecipe } from "./settings-panel";
import { SettingsRow as SettingsRowRecipe } from "./settings-row";

const meta = preview.meta({
  component: Fragment,
  parameters: {
    docs: {
      description: {
        component: "Field layout compositions for grids, sections, labels, and settings rows.",
      },
    },
  },
  title: "Recipes/Forms/Field",
});

export const FormGrid = meta.story({
  render: () => <FormGridRecipe />,
});

export const FormSection = meta.story({
  render: () => <FormSectionRecipe />,
});

export const FormSectionTextarea = meta.story({
  render: () => <FormSectionTextareaRecipe />,
});

export const LabelAccessory = meta.story({
  render: () => <LabelAccessoryRecipe />,
});

export const SettingsPanel = meta.story({
  render: () => <SettingsPanelRecipe />,
});

export const SettingsRow = meta.story({
  render: () => <SettingsRowRecipe />,
});
