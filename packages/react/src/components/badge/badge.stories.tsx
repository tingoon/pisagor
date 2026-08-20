import { ArrowUpRightIcon, PlusCircleIcon } from "@phosphor-icons/react";
import { Badge, Spinner } from "@pisagor/react";
import preview from "#/react/preview";

const meta = preview.meta({
  component: Badge,
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
          "Labels content with a compact status, category, or count so users can scan it quickly.",
      },
      taxonomy: "primitive",
    },
  },
  title: "Components/Data Display/Badge",
});

export const Default = meta.story({
  args: {
    children: "Badge",
  },
});

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
    </div>
  ),
});

export const CustomColor = meta.story({
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge className="border-indigo-200/20 bg-indigo-500/10 text-indigo-500">Indigo</Badge>
      <Badge className="border-pink-200/20 bg-pink-500/10 text-pink-500">Pink</Badge>
      <Badge className="border-sky-200/20 bg-sky-500/10 text-sky-500">Sky</Badge>
      <Badge className="border-purple-200/20 bg-purple-500/10 text-purple-500">Purple</Badge>
    </div>
  ),
});

export const Pill = meta.story({
  args: {
    children: "Badge",
    pill: true,
  },
});

export const WithLink = meta.story({
  args: {
    asChild: true,
    variant: "info",
  },
  render: (args) => (
    <Badge {...args}>
      <a href="https://example.com/components">
        <PlusCircleIcon />
        New components <ArrowUpRightIcon />
      </a>
    </Badge>
  ),
});

export const WithSpinner = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="destructive">
        <Spinner />
        Deleting
      </Badge>
      <Badge variant="outline">
        Generating <Spinner />
      </Badge>
    </div>
  ),
});
