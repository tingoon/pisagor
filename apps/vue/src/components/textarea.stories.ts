import { Textarea } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/textarea/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component:
          "Captures longer text such as messages, notes, and descriptions over multiple lines.",
      },
    },
  },
  title: "Components/Forms/Textarea",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const OnSurface = meta.story({
  render: exampleRender(Examples.OnSurface),
});

export const Autoresize = meta.story({
  render: exampleRender(Examples.Autoresize),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Clearable = meta.story({
  render: exampleRender(Examples.Clearable),
});

export const WithField = meta.story({
  render: exampleRender(Examples.WithField),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
