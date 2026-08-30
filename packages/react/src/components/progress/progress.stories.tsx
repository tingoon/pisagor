import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { Button, ButtonGroup, Field, Progress } from "@pisagor/react";
import { useEffect, useState } from "react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Progress,
  parameters: {
    docs: {
      description: {
        component:
          "Shows how complete a task is along a track, including indeterminate loading when progress is unknown.",
      },
    },
    metadata: {
      aliases: ["progress-bar"],
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Feedback/Progress",
});

export const Default = meta.story({
  render: () => {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return <Progress value={progress} />;
  },
});

export const OrientationHorizontal = meta.story({
  args: {
    value: 60,
  },
});

export const OrientationVertical = meta.story({
  args: {
    className: "h-64",
    orientation: "vertical",
    value: 60,
  },
  render: (args) => (
    <div className="flex w-full items-center justify-center">
      <Progress {...args} />
    </div>
  ),
});

export const WithLabel = meta.story({
  args: {
    isValueVisible: true,
    label: "Upload progress",
    value: 66,
  },
});

export const Indeterminate = meta.story({
  args: {
    indeterminate: true,
  },
  render: (args) => (
    <Field>
      <Field.Label>Establishing connection...</Field.Label>
      <Progress {...args} />
    </Field>
  ),
});

export const Controlled = meta.story({
  render: () => {
    const [value, setValue] = useState(50);

    return (
      <Field>
        <Field.Label className="flex items-center gap-2">
          Controlled progress
          <ButtonGroup className="ml-auto">
            <Button
              aria-label="Decrease"
              onClick={() => setValue(Math.max(0, value - 10))}
              size="icon-sm"
              variant="outline"
            >
              <MinusIcon />
            </Button>
            <Button
              aria-label="Increase"
              onClick={() => setValue(Math.min(100, value + 10))}
              size="icon-sm"
              variant="outline"
            >
              <PlusIcon />
            </Button>
          </ButtonGroup>
        </Field.Label>
        <Progress value={value} />
      </Field>
    );
  },
});
