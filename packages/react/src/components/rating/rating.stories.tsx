import { HeartIcon } from "@phosphor-icons/react";
import { Avatar } from "@pisagor/react/avatar";
import { Card } from "@pisagor/react/card";
import { Rating } from "@pisagor/react/rating";
import { useState } from "react";
import preview, { SurfaceDecorator } from "#/react/preview";

const meta = preview.meta({
  component: Rating,
  parameters: {
    docs: {
      api: "closed",
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Collects or displays a star-style score so users can rate or review at a glance.",
      },
      taxonomy: "standard",
    },
  },
  title: "Components/Forms/Rating",
});

export const Default = meta.story({});

export const OnSurface = Default.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const CustomColor = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-8">
      <Rating className="text-info" count={5} defaultValue={4} />
      <Rating className="text-success" count={5} defaultValue={4} />
    </div>
  ),
});

export const Count = meta.story({
  args: {
    count: 3,
    defaultValue: 3,
  },
});

export const CustomIcon = meta.story({
  args: {
    allowHalf: true,
    className: "text-destructive",
    icon: <HeartIcon />,
  },
});

export const CustomSize = meta.story({
  args: {
    className: "**:data-[slot=rating-item-indicator]:size-8",
  },
});

export const HalfStar = meta.story({
  args: {
    allowHalf: true,
    defaultValue: 3.5,
  },
});

export const Testimonial = meta.story({
  args: {
    className: "**:data-[slot=rating-item-indicator]:size-4",
    defaultValue: 5,
    readOnly: true,
  },
  render: (args) => (
    <Card>
      <Card.Content className="space-y-2">
        <Rating {...args} />
        <blockquote className="text-muted-foreground">
          &ldquo;This completely changed our workflow. Fast, reliable, and the team loves it. Would
          recommend to anyone.&rdquo;
        </blockquote>
        <div className="flex gap-2">
          <Avatar alt="jane.doe@example.com" fallback="JD" size="lg" />
          <div>
            <Card.Title className="font-medium text-sm">Jane Doe</Card.Title>
            <Card.Description>Frontend Developer</Card.Description>
          </div>
        </div>
      </Card.Content>
    </Card>
  ),
});

export const Invalid = meta.story({
  args: {
    defaultValue: 3,
    invalid: true,
  },
});

export const Disabled = meta.story({
  args: {
    defaultValue: 3,
    disabled: true,
  },
});

export const Readonly = meta.story({
  args: {
    defaultValue: 3,
    readOnly: true,
  },
});

export const Controlled = meta.story({
  render: () => {
    const [value, setValue] = useState(0);

    const isCorrectRating = value === 5;

    return (
      <div className="flex flex-col gap-2 text-center text-sm">
        <p>Select the rating 5</p>
        <Rating onValueChange={(value) => setValue(value ?? 0)} value={value} />
        <p className="text-center">{isCorrectRating ? "✅" : "❌"}</p>
      </div>
    );
  },
});
