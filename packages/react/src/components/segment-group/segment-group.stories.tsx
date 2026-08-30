import { SegmentGroup } from "@pisagor/react";
import { useState } from "react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: SegmentGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Switches between a few related views or modes with segmented controls that show the current choice.",
      },
    },
    metadata: {
      aliases: ["segmented-control"],
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Indicator: SegmentGroup.Indicator,
    Item: SegmentGroup.Item,
    Root: SegmentGroup.Root,
  },
  title: "Components/Actions/Segment Group",
});

const segmentItems = [
  { label: "Profile", value: "Profile" },
  { label: "Account", value: "Account" },
  { label: "Security", value: "Security" },
  { label: "Notifications", value: "Notifications" },
];

export const Default = meta.story({
  args: {
    className: "rounded-lg",
    defaultValue: "Profile",
    items: segmentItems,
  },
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <SegmentGroup
        className="rounded-lg"
        defaultValue="Profile"
        items={segmentItems}
        variant="default"
      />
      <SegmentGroup defaultValue="Profile" items={segmentItems} variant="underline" />
      <SegmentGroup
        defaultValue="Profile"
        items={segmentItems}
        orientation="vertical"
        variant="underline"
      />
    </div>
  ),
});

export const OrientationHorizontal = meta.story({
  args: {
    className: "rounded-lg",
    defaultValue: "Profile",
    items: segmentItems,
    orientation: "horizontal",
  },
});

export const OrientationVertical = meta.story({
  args: {
    className: "rounded-lg",
    defaultValue: "Profile",
    items: segmentItems,
    orientation: "vertical",
  },
});

export const DisabledItem = meta.story({
  args: {
    className: "rounded-lg",
    defaultValue: "Profile",
    items: segmentItems.map((item) =>
      item.value === "Security" ? { ...item, disabled: true } : item,
    ),
  },
});

export const CustomIndicator = meta.story({
  render: () => {
    const items = ["Profile", "Account", "Security", "Notifications"];
    return (
      <SegmentGroup.Root
        className="rounded-lg *:data-[slot=segment-group-indicator]:bg-primary/40"
        defaultValue="Profile"
      >
        {items.map((item) => (
          <SegmentGroup.Item
            className="px-2 py-1.5 text-sm"
            disabled={item === "Security"}
            key={item}
            value={item}
          >
            {item}
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.Root>
    );
  },
});

export const IndicatorOnHover = meta.story({
  render: () => {
    const pages = ["Profile", "Account", "Security", "Notifications"];
    const [value, setValue] = useState("Profile");
    const [hoverValue, setHoverValue] = useState<string | null>(null);

    return (
      <SegmentGroup.Root
        className="rounded-lg"
        onValueChange={(value) => setValue(value ?? "Profile")}
        value={hoverValue ?? value}
      >
        {pages.map((page) => (
          <SegmentGroup.Item
            className="px-2 py-1.5 text-sm"
            key={page}
            onClick={() => setValue(page)}
            onMouseEnter={() => setHoverValue(page)}
            onMouseLeave={() => setHoverValue(null)}
            value={page}
          >
            {page}
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.Root>
    );
  },
});

export const Disabled = meta.story({
  args: {
    className: "rounded-lg",
    defaultValue: "Profile",
    disabled: true,
    items: segmentItems,
  },
});

export const Controlled = meta.story({
  render: () => {
    const [value, setValue] = useState<string | null>("Profile");

    return (
      <SegmentGroup
        className="rounded-lg"
        items={segmentItems}
        onValueChange={setValue}
        value={value}
      />
    );
  },
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `SegmentGroup.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => {
    const items = ["Profile", "Account", "Security", "Notifications"];
    return (
      <SegmentGroup.Root className="rounded-lg" defaultValue="Profile">
        {items.map((item) => (
          <SegmentGroup.Item className="px-2 py-1.5 text-sm" key={item} value={item}>
            {item}
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.Root>
    );
  },
});
