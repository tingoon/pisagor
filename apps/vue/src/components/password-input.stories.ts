import { PasswordInput } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/password-input/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: PasswordInput,
  parameters: {
    docs: {
      description: {
        component:
          "Collects passwords with a show-hide control so users can enter credentials securely and verify them.",
      },
    },
  },
  title: "Components/Forms/Password Input",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const OnSurface = meta.story({
  render: exampleRender(Examples.OnSurface),
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const Clearable = meta.story({
  render: exampleRender(Examples.Clearable),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const Autocomplete = meta.story({
  render: exampleRender(Examples.Autocomplete),
});

export const AutoHide = meta.story({
  render: exampleRender(Examples.AutoHide),
});

export const ControlledVisibility = meta.story({
  render: exampleRender(Examples.ControlledVisibility),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
