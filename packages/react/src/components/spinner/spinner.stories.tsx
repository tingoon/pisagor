import { Spinner } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Spinner,
  parameters: {
    docs: {
      aliases: ["loader"],
      api: "closed",
      checklist: {
        accessibleColor: true,
        definedOptions: true,
        platformScales: true,
      },
      description: {
        component:
          "Shows that something is loading when the wait time is short and a progress bar is not needed.",
      },
      taxonomy: "primitive",
    },
  },
  title: "Components/Feedback/Spinner",
});

export const Default = meta.story({});

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  ),
});
