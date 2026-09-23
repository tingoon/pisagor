import { InputGroup } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/input-group/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: InputGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Combines inputs with icons, buttons, or labels in one control so related actions stay together.",
      },
    },
  },
  title: "Components/Forms/Input Group",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const OnSurface = meta.story({
  render: exampleRender(Examples.OnSurface),
});

export const WithText = meta.story({
  render: exampleRender(Examples.WithText),
});

export const WithTextarea = meta.story({
  render: exampleRender(Examples.WithTextarea),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const AlignBlockEnd = meta.story({
  render: exampleRender(Examples.AlignBlockEnd),
});

export const AlignBlockStart = meta.story({
  render: exampleRender(Examples.AlignBlockStart),
});

export const AlignInlineEnd = meta.story({
  render: exampleRender(Examples.AlignInlineEnd),
});

export const AlignInlineStart = meta.story({
  render: exampleRender(Examples.AlignInlineStart),
});

export const WithBadge = meta.story({
  render: exampleRender(Examples.WithBadge),
});

export const WithKeyboardShortcut = meta.story({
  render: exampleRender(Examples.WithKeyboardShortcut),
});

export const WithSpinner = meta.story({
  render: exampleRender(Examples.WithSpinner),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
