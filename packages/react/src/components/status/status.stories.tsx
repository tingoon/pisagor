import { PlusIcon } from "@phosphor-icons/react";
import { Status } from "@pisagor/react";
import preview from "#/react/preview";

const meta = preview.meta({
  component: Status,
  parameters: {
    docs: {
      api: "closed",
      checklist: {
        accessibleColor: "partial",
        definedOptions: true,
        platformScales: true,
      },
      description: {
        component:
          "Signals state with a small colored dot so users can see availability or severity at a glance.",
      },
      taxonomy: "primitive",
    },
  },
  title: "Components/Feedback/Status",
});

export const Default = meta.story({});

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Status size="sm" variant="info" />
      <Status size="md" variant="info" />
      <Status size="lg" variant="info" />
    </div>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex gap-2">
      <Status variant="default" />
      <Status variant="success" />
      <Status variant="info" />
      <Status variant="warning" />
      <Status variant="destructive" />
    </div>
  ),
});

export const CustomColor = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Status className="bg-amber-500" />
      <Status className="bg-teal-500" />
      <Status className="bg-purple-500" />
    </div>
  ),
});

export const CustomSize = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Status className="size-4" variant="success" />
      <Status className="size-6" variant="info" />
      <Status className="size-8" variant="warning" />
    </div>
  ),
});

export const WithIcon = meta.story({
  args: {
    children: <PlusIcon />,
    size: "lg",
  },
});
