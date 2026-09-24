import { Avatar, AvatarGroup } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/avatar/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: AvatarGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Shows several people at once by stacking avatars, with an optional count for members that do not fit.",
      },
    },
  },
  subcomponents: {
    Avatar,
    Count: AvatarGroup.Count,
    Root: AvatarGroup.Root,
  },
  title: "Components/Media/Avatar Group",
});

export const Playground = meta.story({
  render: exampleRender(Examples.Group),
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Group),
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
});

export const Count = meta.story({
  render: exampleRender(Examples.Count),
});
