import { Fragment } from "react";
import preview from "#/react/preview";
import { SearchFieldButtonGroup } from "./search-field-button-group";
import { SearchFieldInline } from "./search-field-inline";

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
        component: "Search input compositions with button group and inline field layouts.",
      },
    },
  },
  title: "Recipes/Forms/Input/Search Field",
});

export const ButtonGroup = meta.story({
  render: () => <SearchFieldButtonGroup />,
});

export const Inline = meta.story({
  render: () => <SearchFieldInline />,
});
