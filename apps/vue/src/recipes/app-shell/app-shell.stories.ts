import preview from "#/storybook/preview";
import { StandardAppShell } from "./standard-app-shell";

const meta = preview.meta({
  component: StandardAppShell,
  parameters: {
    docs: {
      description: {
        component:
          "Standard application shell with top navigation, icon rail, side panel, main content, and inspector regions ready for menus and page content.",
      },
    },
    layout: "fullscreen",
  },
  title: "Recipes/Layout/App Shell",
});

export const Standard = meta.story({
  render: () => ({
    components: { StandardAppShell },
    template: `<StandardAppShell />`,
  }),
});
