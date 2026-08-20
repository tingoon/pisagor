import { Fragment } from "react";
import preview from "#/storybook/preview";
import { CodeEditorInput } from "./code-editor-input";
import { InputGroupWithButton } from "./input-group-with-button";
import { InputGroupWithInnerLabel } from "./input-group-with-inner-label";
import { InputGroupWithMenu } from "./input-group-with-menu";
import { InputGroupWithNumberInput } from "./input-group-with-number-input";
import { InputGroupWithTooltip } from "./input-group-with-tooltip";

const meta = preview.meta({
  component: Fragment,
  parameters: {
    docs: {
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Input group compositions for code editing, menus, inline actions, labels, number inputs, and tooltips.",
      },
    },
  },
  title: "Recipes/Forms/Input Group",
});

export const CodeEditor = meta.story({
  render: () => <CodeEditorInput />,
});

export const WithMenu = meta.story({
  render: () => <InputGroupWithMenu />,
});

export const WithButton = meta.story({
  render: () => <InputGroupWithButton />,
});

export const WithInnerLabel = meta.story({
  render: () => <InputGroupWithInnerLabel />,
});

export const WithNumberInput = meta.story({
  render: () => <InputGroupWithNumberInput />,
});

export const WithTooltip = meta.story({
  render: () => <InputGroupWithTooltip />,
});
