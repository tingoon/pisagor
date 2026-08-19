import preview from "#/vue/preview";
import { StandardAppShell } from "./standard-app-shell";

const meta = preview.meta({
  component: StandardAppShell,
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
