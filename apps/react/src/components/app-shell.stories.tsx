import { AppShell } from "@pisagor/react";
import * as Examples from "@pisagor/react/app-shell/examples";
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
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Banner = meta.story({
  render: Examples.Banner,
});

export const Navigation = meta.story({
  render: Examples.Navigation,
});

export const Inspectors = meta.story({
  render: Examples.Inspectors,
});

export const Panels = meta.story({
  render: Examples.Panels,
});

export const Rails = meta.story({
  render: Examples.Rails,
});

export const Header = meta.story({
  render: Examples.Header,
});

export const Main = meta.story({
  render: Examples.Main,
});

export const Content = meta.story({
  render: Examples.Content,
});
