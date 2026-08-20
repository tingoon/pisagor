import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { Button, ButtonGroup, CircularProgress, Field } from "@pisagor/react";
import { useEffect, useState } from "react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: CircularProgress,
  parameters: {
    docs: {
      api: "closed",
      checklist: {
        accessibleColor: true,
        definedOptions: true,
        platformScales: true,
      },
      description: {
        component:
          "Shows how far along a task is on a circular track, including indeterminate loading when the duration is unknown.",
      },
      taxonomy: "primitive",
    },
  },
  title: "Components/Feedback/Circular Progress",
});

export const Default = meta.story({
  render: () => {
    const [progress, setProgress] = useState(24);

    useEffect(() => {
      const timer = setTimeout(() => setProgress(72), 500);
      return () => clearTimeout(timer);
    }, []);

    return <CircularProgress value={progress} />;
  },
});

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      <CircularProgress size={24} value={35} />
      <CircularProgress size={32} value={62} />
      <CircularProgress size={40} value={84} />
    </div>
  ),
});

export const Thickness = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      <CircularProgress size={24} thickness={2} value={35} />
      <CircularProgress size={66} thickness={6} value={62} />
      <CircularProgress size={100} thickness={8} value={84} />
    </div>
  ),
});

export const WithValue = meta.story({
  args: {
    isValueVisible: true,
    size: 66,
    thickness: 5,
    value: 66,
  },
});

export const Indeterminate = meta.story({
  args: {
    indeterminate: true,
  },
  render: (args) => (
    <Field>
      <Field.Label className="justify-center">Establishing connection...</Field.Label>
      <CircularProgress {...args} />
    </Field>
  ),
});

export const Controlled = meta.story({
  render: () => {
    const [value, setValue] = useState(55);

    return (
      <div className="flex flex-col items-center gap-2">
        <ButtonGroup>
          <Button
            onClick={() => setValue(Math.max(0, value - 10))}
            size="icon-sm"
            variant="outline"
          >
            <MinusIcon />
          </Button>
          <Button
            onClick={() => setValue(Math.min(100, value + 10))}
            size="icon-sm"
            variant="outline"
          >
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <CircularProgress value={value} />
      </div>
    );
  },
});
