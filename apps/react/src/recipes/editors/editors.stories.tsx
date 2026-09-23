import preview from "#/storybook/preview";
import { EditableUserCard as EditableUserCardRecipe } from "./editable-user-card";
import { IdeLayout as IdeLayoutRecipe } from "./ide-layout";
import { RichTextToolbar as RichTextToolbarRecipe } from "./rich-text-toolbar";

const meta = preview.meta({
  component: IdeLayoutRecipe,
  parameters: {
    docs: {
      description: {
        component:
          "Editor compositions for IDE layouts, rich text toolbars, and editable user cards.",
      },
    },
  },
  title: "Recipes/Editors",
});

export const Playground = meta.story({
  args: {
    className: "h-64",
  },
  tags: ["autodocs"],
});

export const RichTextToolbar = meta.story({
  render: () => <RichTextToolbarRecipe />,
});

export const EditableUserCard = meta.story({
  render: () => <EditableUserCardRecipe />,
});
