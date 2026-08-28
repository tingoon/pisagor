import { TextBIcon, TextItalicIcon, TextUnderlineIcon } from "@phosphor-icons/react";
import { useState } from "react";
import preview from "#/storybook/preview";
import { cn } from "../../internal/utils";
import { ToggleGroup } from "..";

const meta = preview.meta({
  component: ToggleGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users choose one or more pressed states from a row of related toggle buttons.",
      },
    },
    metadata: {
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Item: ToggleGroup.Item,
    Root: ToggleGroup.Root,
  },
  title: "Components/Actions/Toggle Group",
});

export const Default = meta.story({
  args: {
    defaultValue: ["bold"],
    items: [
      { children: "Bold", value: "bold" },
      { children: "Italic", value: "italic" },
      { children: "Underline", value: "underline" },
    ],
    multiple: true,
  },
});

const iconToggleItems = (
  <>
    <ToggleGroup.Item aria-label="Toggle bold" value="bold">
      <TextBIcon />
    </ToggleGroup.Item>
    <ToggleGroup.Item aria-label="Toggle italic" value="italic">
      <TextItalicIcon />
    </ToggleGroup.Item>
    <ToggleGroup.Item aria-label="Toggle underline" value="underline">
      <TextUnderlineIcon />
    </ToggleGroup.Item>
  </>
);

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <ToggleGroup.Root defaultValue={["bold"]} multiple size="sm">
        <ToggleGroup.Item aria-label="Toggle bold" value="bold">
          <TextBIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle italic" value="italic">
          <TextItalicIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle underline" value="underline">
          <TextUnderlineIcon />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
      <ToggleGroup.Root defaultValue={["bold"]} multiple size="lg">
        <ToggleGroup.Item aria-label="Toggle bold" value="bold">
          <TextBIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle italic" value="italic">
          <TextItalicIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle underline" value="underline">
          <TextUnderlineIcon />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <ToggleGroup.Root defaultValue={["bold"]} multiple variant="ghost">
        {iconToggleItems}
      </ToggleGroup.Root>
      <ToggleGroup.Root defaultValue={["bold"]} multiple variant="ghost">
        {iconToggleItems}
      </ToggleGroup.Root>
      <ToggleGroup.Root defaultValue={["bold"]} multiple variant="outline">
        {iconToggleItems}
      </ToggleGroup.Root>
    </div>
  ),
});

export const Horizontal = meta.story({
  render: () => (
    <ToggleGroup.Root defaultValue={["bold"]} orientation="horizontal" variant="outline">
      <ToggleGroup.Item aria-label="Toggle bold" value="bold">
        <TextBIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle italic" value="italic">
        <TextItalicIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle underline" value="underline">
        <TextUnderlineIcon />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  ),
});

export const Vertical = meta.story({
  render: () => (
    <ToggleGroup.Root defaultValue={["bold"]} orientation="vertical" variant="outline">
      <ToggleGroup.Item aria-label="Toggle bold" value="bold">
        <TextBIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle italic" value="italic">
        <TextItalicIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle underline" value="underline">
        <TextUnderlineIcon />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  ),
});

export const Spacing = meta.story({
  render: () => (
    <ToggleGroup.Root defaultValue={["italic"]} multiple spacing={2} variant="outline">
      <ToggleGroup.Item aria-label="Toggle bold" value="bold">
        <TextBIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle italic" value="italic">
        <TextItalicIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle underline" value="underline">
        <TextUnderlineIcon />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  ),
});

export const DisabledItem = meta.story({
  render: () => (
    <ToggleGroup.Root defaultValue={["bold"]} multiple>
      <ToggleGroup.Item aria-label="Toggle bold" value="bold">
        <TextBIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle italic" disabled value="italic">
        <TextItalicIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle underline" value="underline">
        <TextUnderlineIcon />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  ),
});

export const FontWeight = meta.story({
  render: () => {
    const FONT_WEIGHTS = [
      { className: "font-light", label: "Light", value: "light" },
      { className: "font-normal", label: "Normal", value: "normal" },
      { className: "font-medium", label: "Medium", value: "medium" },
      { className: "font-bold", label: "Bold", value: "bold" },
    ] as const;
    const [value, setValue] = useState<string[]>(["normal"]);

    return (
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <span className="font-medium text-sm">Font weight</span>
          <ToggleGroup.Root
            className="flex-wrap"
            multiple={false}
            onValueChange={(value) => setValue(Array.isArray(value) ? value : [value])}
            size="lg"
            spacing={2}
            value={value}
            variant="outline"
          >
            {FONT_WEIGHTS.map((weight) => (
              <ToggleGroup.Item
                aria-label={`Set font weight to ${weight.label}`}
                className="size-16 flex-col gap-1 py-2"
                key={weight.value}
                value={weight.value}
              >
                <span className={cn("text-lg", weight.className)}>Aa</span>
                <span className="text-muted-foreground text-xs">{weight.label}</span>
              </ToggleGroup.Item>
            ))}
          </ToggleGroup.Root>
        </div>
      </div>
    );
  },
});

export const Disabled = meta.story({
  render: () => (
    <ToggleGroup.Root defaultValue={["bold"]} disabled multiple>
      <ToggleGroup.Item aria-label="Toggle bold" value="bold">
        <TextBIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle italic" value="italic">
        <TextItalicIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle underline" value="underline">
        <TextUnderlineIcon />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  ),
});

export const Single = meta.story({
  render: () => (
    <ToggleGroup.Root defaultValue={["bold"]} multiple={false}>
      <ToggleGroup.Item aria-label="Toggle bold" value="bold">
        <TextBIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle italic" value="italic">
        <TextItalicIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle underline" value="underline">
        <TextUnderlineIcon />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  ),
});

export const Controlled = meta.story({
  render: () => {
    const [value, setValue] = useState(["bold"]);

    return (
      <div className="flex flex-col items-center gap-2">
        <ToggleGroup.Root
          onValueChange={(value) => setValue(Array.isArray(value) ? value : [value])}
          value={value}
        >
          <ToggleGroup.Item aria-label="Toggle bold" value="bold">
            <TextBIcon />
          </ToggleGroup.Item>
          <ToggleGroup.Item aria-label="Toggle italic" value="italic">
            <TextItalicIcon />
          </ToggleGroup.Item>
          <ToggleGroup.Item aria-label="Toggle underline" value="underline">
            <TextUnderlineIcon />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
        <p className="text-center text-muted-foreground text-sm">
          {value.length > 0 ? value.join(", ") : "None"}
        </p>
      </div>
    );
  },
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `ToggleGroup.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => (
    <ToggleGroup.Root defaultValue={["bold"]} multiple>
      <ToggleGroup.Item aria-label="Toggle bold" value="bold">
        <TextBIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle italic" value="italic">
        <TextItalicIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle underline" value="underline">
        <TextUnderlineIcon />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  ),
});
