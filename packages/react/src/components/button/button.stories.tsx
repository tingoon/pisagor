import {
  ArrowSquareOutIcon,
  DownloadIcon,
  GearIcon,
  HeartIcon,
  PaperPlaneTiltIcon,
  PlusIcon,
  StarIcon,
} from "@phosphor-icons/react";
import preview from "#/storybook/preview";
import { Button } from "..";

const meta = preview.meta({
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Triggers an action or navigation when clicked, with styles that reflect how important the action is.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Actions/Button",
});

export const Default = meta.story({
  args: {
    children: "Button",
  },
});

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <div className="flex items-center gap-2" key={size}>
          <Button size={size}>Button</Button>
          <Button size={`icon-${size}`}>
            <PlusIcon />
          </Button>
        </div>
      ))}
    </div>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
});

export const CustomColor = meta.story({
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button className="bg-indigo-600 text-white shadow-indigo-600/24 hover:bg-indigo-700 focus-visible:ring-indigo-600/50">
        Indigo
      </Button>
      <Button className="bg-pink-600 text-white shadow-pink-600/24 hover:bg-pink-700 focus-visible:ring-pink-600/50">
        Pink
      </Button>
      <Button className="bg-sky-600 text-white shadow-sky-600/24 hover:bg-sky-700 focus-visible:ring-sky-600/50">
        Sky
      </Button>
      <Button className="bg-purple-600 text-white shadow-purple-600/24 hover:bg-purple-700 focus-visible:ring-purple-500/50">
        Purple
      </Button>
    </div>
  ),
});

export const Pill = meta.story({
  args: {
    children: (
      <>
        <PlusIcon />
        Add
      </>
    ),
    pill: true,
    variant: "outline",
  },
});

export const NoClickEffect = meta.story({
  args: {
    children: "Button",
    clickEffect: false,
  },
});

export const Icon = meta.story({
  args: {
    children: <StarIcon />,
    size: "icon-md",
    variant: "outline",
  },
});

export const AsChild = meta.story({
  render: () => (
    <Button asChild>
      <a href="/login">Login</a>
    </Button>
  ),
});

export const Disabled = meta.story({
  args: {
    children: (
      <>
        Send <PaperPlaneTiltIcon />
      </>
    ),
    disabled: true,
  },
});

export const Loading = meta.story({
  args: {
    children: "Loading",
    isLoading: true,
  },
});

export const WithIcon = meta.story({
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="default">
        <PlusIcon />
        Add
      </Button>
      <Button variant="outline">
        <GearIcon />
        Settings
      </Button>
      <Button variant="secondary">
        <HeartIcon />
        Favorite
      </Button>
      <Button variant="ghost">
        <DownloadIcon />
        Download
      </Button>
      <Button variant="link">
        Visit website
        <ArrowSquareOutIcon />
      </Button>
    </div>
  ),
});
