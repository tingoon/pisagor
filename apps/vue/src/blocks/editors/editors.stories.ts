import { ideLayoutBlock } from "@pisagor/recipes/blocks/editors";
import preview from "#/storybook/preview";
import { EditableUserCard } from "./editable-user-card";
import { IdeLayout } from "./ide-layout";
import { RichTextToolbar } from "./rich-text-toolbar";

const meta = preview.meta({
  component: IdeLayout,
  parameters: {
    docs: {
      description: {
        component:
          "Editor compositions for IDE layouts, rich text toolbars, and editable user cards.",
      },
    },
  },
  title: "Blocks/Editors",
});

export const Playground = meta.story({
  args: {},
  render: () => ({
    components: { IdeLayout },
    setup() {
      return { frameClass: ideLayoutBlock().frame() };
    },
    template: `<IdeLayout :class="frameClass" />`,
  }),
  tags: ["autodocs"],
});

export const RichTextToolbarStory = meta.story({
  render: () => ({
    components: { RichTextToolbar },
    template: `<RichTextToolbar />`,
  }),
});

export const EditableUserCardStory = meta.story({
  render: () => ({
    components: { EditableUserCard },
    template: `<EditableUserCard />`,
  }),
});
