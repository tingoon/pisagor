import preview from "#/storybook/preview";
import { SearchFieldButtonGroup } from "./search-field-button-group";
import { SearchFieldInline } from "./search-field-inline";

const meta = preview.meta({
  component: SearchFieldButtonGroup,
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
  render: () => ({
    components: { SearchFieldButtonGroup },
    template: `<SearchFieldButtonGroup />`,
  }),
});

export const Inline = meta.story({
  render: () => ({
    components: { SearchFieldInline },
    template: `<SearchFieldInline />`,
  }),
});
