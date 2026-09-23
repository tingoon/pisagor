import preview from "#/storybook/preview";
import { SearchFieldButtonGroup } from "./search-field-button-group";
import { SearchFieldInline } from "./search-field-inline";

const meta = preview.meta({
  component: SearchFieldButtonGroup,
  parameters: {
    docs: {
      description: {
        component: "Search input compositions with button group and inline field layouts.",
      },
    },
  },
  title: "Recipes/Forms/Input/Search Field",
});

export const Playground = meta.story({
  render: () => ({
    components: { SearchFieldButtonGroup },
    template: `<SearchFieldButtonGroup />`,
  }),
  tags: ["autodocs"],
});

export const Inline = meta.story({
  render: () => ({
    components: { SearchFieldInline },
    template: `<SearchFieldInline />`,
  }),
});
