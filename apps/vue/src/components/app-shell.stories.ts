import { AppShell } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/app-shell/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: AppShell,
  parameters: {
    docs: {
      description: {
        component:
          "Multi-region application shell with draggable side panels and an optional inspector for dashboard layouts.",
      },
    },
  },
  title: "Components/Layout/App Shell",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Banner = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Fixed top banner with a dismiss control. Hiding the banner collapses the shell spacer.",
      },
    },
  },
  render: exampleRender(Examples.Banner),
});

export const Navigation = meta.story({
  render: exampleRender(Examples.Navigation),
});

export const Inspectors = meta.story({
  render: exampleRender(Examples.Inspectors),
});

export const Panels = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Start and end panels with `PanelHeader`, `PanelContent`, and `PanelFooter` sub-regions.",
      },
    },
  },
  render: exampleRender(Examples.Panels),
});

export const Rails = meta.story({
  render: exampleRender(Examples.Rails),
});

export const Header = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Toolbar row inside `AppShell.Main`. Pair with panel triggers in the header and inspector triggers in navigation.",
      },
    },
  },
  render: exampleRender(Examples.Header),
});

export const Main = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Primary column spanning the shell grid. Holds the page header and scrollable content.",
      },
    },
  },
  render: exampleRender(Examples.Main),
});

export const Content = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Scrollable page body inside `AppShell.Main`. Long content grows the page and scrolls on the body.",
      },
    },
  },
  render: exampleRender(Examples.Content),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
