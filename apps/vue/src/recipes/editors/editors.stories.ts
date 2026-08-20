import preview from "#/storybook/preview";
import { EditableUserCard } from "./editable-user-card";
import { IdeLayout } from "./ide-layout";
import { RichTextToolbar } from "./rich-text-toolbar";

const meta = preview.meta({
  component: IdeLayout,
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
          "Editor compositions for IDE layouts, rich text toolbars, and editable user cards.",
      },
    },
  },
  title: "Recipes/Editors",
});

export const IdeLayoutStory = meta.story({
  args: {},
  render: () => ({
    components: { IdeLayout },
    template: `<IdeLayout class="h-64" />`,
  }),
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
