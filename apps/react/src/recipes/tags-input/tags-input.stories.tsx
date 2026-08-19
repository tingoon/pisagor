import { Fragment } from "react";
import preview from "#/react/preview";
import { TagsWithCombobox } from "./tags-with-combobox";

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
          "Tags input paired with a combobox for searchable tag selection and custom value entry.",
      },
    },
  },
  title: "Recipes/Forms/Tags Input",
});

export const WithCombobox = meta.story({
  render: () => <TagsWithCombobox />,
});
