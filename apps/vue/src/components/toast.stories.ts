import { toast } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/toast/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: toast,
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
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const Duration = meta.story({
  render: exampleRender(Examples.Duration),
});

export const Closable = meta.story({
  render: exampleRender(Examples.Closable),
});

export const Dedupe = meta.story({
  render: exampleRender(Examples.Dedupe),
});

export const Action = meta.story({
  render: exampleRender(Examples.Action),
});

export const WithPromise = meta.story({
  render: exampleRender(Examples.WithPromise),
});

export const Placements = meta.story({
  render: exampleRender(Examples.Placements),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
