import { Fragment } from "react";
import preview from "#/storybook/preview";
import { SearchFieldButtonGroup } from "./search-field-button-group";
import { SearchFieldInline } from "./search-field-inline";

const meta = preview.meta({
  component: Fragment,
  parameters: {
    docs: {
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
