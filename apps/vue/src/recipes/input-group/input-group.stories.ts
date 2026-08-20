import { InputGroup } from "@pisagor/vue";
import preview from "#/storybook/preview";
import { CodeEditorInput } from "./code-editor-input";
import { InputGroupWithButton } from "./input-group-with-button";
import { InputGroupWithInnerLabel } from "./input-group-with-inner-label";
import { InputGroupWithMenu } from "./input-group-with-menu";
import { InputGroupWithNumberInput } from "./input-group-with-number-input";
import { InputGroupWithTooltip } from "./input-group-with-tooltip";

const meta = preview.meta({
  component: InputGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Input group compositions for code editing, menus, inline actions, labels, number inputs, and tooltips.",
      },
    },
  },
  title: "Recipes/Forms/Input Group",
});

export const CodeEditor = meta.story({
  render: () => ({
    components: { CodeEditorInput },
    template: `<CodeEditorInput />`,
  }),
});

export const WithMenu = meta.story({
  render: () => ({
    components: { InputGroupWithMenu },
    template: `<InputGroupWithMenu />`,
  }),
});

export const WithButton = meta.story({
  render: () => ({
    components: { InputGroupWithButton },
    template: `<InputGroupWithButton />`,
  }),
});

export const WithInnerLabel = meta.story({
  render: () => ({
    components: { InputGroupWithInnerLabel },
    template: `<InputGroupWithInnerLabel />`,
  }),
});

export const WithNumberInput = meta.story({
  render: () => ({
    components: { InputGroupWithNumberInput },
    template: `<InputGroupWithNumberInput />`,
  }),
});

export const WithTooltip = meta.story({
  render: () => ({
    components: { InputGroupWithTooltip },
    template: `<InputGroupWithTooltip />`,
  }),
});
