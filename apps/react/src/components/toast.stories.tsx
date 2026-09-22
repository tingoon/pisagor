import * as Examples from "@pisagor/react/toast/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  parameters: {
    docs: {
      description: {
        component:
          "Shows brief feedback messages that appear and dismiss automatically after an action completes.",
      },
    },
  },
  title: "Components/Feedback/Toast",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Duration = meta.story({
  render: Examples.Duration,
});

export const Closable = meta.story({
  render: Examples.Closable,
});

export const Dedupe = meta.story({
  render: Examples.Dedupe,
});

export const Action = meta.story({
  render: Examples.Action,
});

export const WithPromise = meta.story({
  render: Examples.WithPromise,
});

export const Placements = meta.story({
  render: Examples.Placements,
});
