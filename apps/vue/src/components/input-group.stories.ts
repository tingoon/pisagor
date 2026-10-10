import { InputGroup } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/input-group";

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

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
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

export const WithTextarea = meta.story({
  render: exampleRender(Examples.WithTextarea),
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

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});
