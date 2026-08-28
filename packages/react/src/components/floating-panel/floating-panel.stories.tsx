import { createListCollection } from "@ark-ui/react";
import {
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CaretUpIcon,
  GearSixIcon,
  XIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import preview from "#/storybook/preview";
import { Button, Field, FloatingPanel, NumberInput, Select } from "..";

const meta = preview.meta({
  component: FloatingPanel,
  parameters: {
    docs: {
      description: {
        component:
          "Presents draggable, resizable content in a floating window for tools or inspectors.",
      },
    },
    metadata: {
      aliases: ["window"],
      api: "compound",
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    Body: FloatingPanel.Body,
    CloseTrigger: FloatingPanel.CloseTrigger,
    Content: FloatingPanel.Content,
    Control: FloatingPanel.Control,
    DragTrigger: FloatingPanel.DragTrigger,
    Footer: FloatingPanel.Footer,
    Header: FloatingPanel.Header,
    Maximize: FloatingPanel.Maximize,
    Minimize: FloatingPanel.Minimize,
    ResizeTrigger: FloatingPanel.ResizeTrigger,
    Restore: FloatingPanel.Restore,
    StageTrigger: FloatingPanel.StageTrigger,
    Title: FloatingPanel.Title,
    Trigger: FloatingPanel.Trigger,
  },
  title: "Components/Overlay/Floating Panel",
});

export const Default = meta.story({
  render: () => {
    const collection = createListCollection({
      items: ["Inter", "Roboto", "Helvetica", "Geist"],
    });
    return (
      <FloatingPanel defaultSize={{ height: 300, width: 360 }}>
        <FloatingPanel.Trigger asChild>
          <Button variant="outline">Open</Button>
        </FloatingPanel.Trigger>
        <FloatingPanel.Content>
          <FloatingPanel.Header>
            <GearSixIcon />
            <FloatingPanel.Title>Settings</FloatingPanel.Title>
            <FloatingPanel.Control>
              <FloatingPanel.Minimize />
              <FloatingPanel.Maximize />
              <FloatingPanel.Restore />
              <FloatingPanel.CloseTrigger asChild>
                <Button aria-label="Close" size="icon-xs">
                  <XIcon aria-hidden />
                </Button>
              </FloatingPanel.CloseTrigger>
            </FloatingPanel.Control>
          </FloatingPanel.Header>
          <FloatingPanel.Body>
            <Field>
              <Field.Label>Font family</Field.Label>
              <Select.Root collection={collection} defaultValue={["Inter"]}>
                <Select.Trigger className="w-full">
                  <Select.ValueText />
                </Select.Trigger>
                <Select.Content>
                  {collection.items.map((item) => (
                    <Select.Item item={item} key={item}>
                      {item}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Field>
            <Field>
              <Field.Label>Font size</Field.Label>
              <NumberInput className="w-full" defaultValue="16">
                <NumberInput.Control>
                  <NumberInput.DecrementTrigger />
                  <NumberInput.Input />
                  <NumberInput.IncrementTrigger />
                </NumberInput.Control>
              </NumberInput>
            </Field>
          </FloatingPanel.Body>
          <FloatingPanel.Footer>
            <Button variant="outline">Save</Button>
          </FloatingPanel.Footer>
        </FloatingPanel.Content>
      </FloatingPanel>
    );
  },
});

export const CustomSpacing = meta.story({
  render: () => {
    const collection = createListCollection({
      items: ["Inter", "Roboto", "Helvetica", "Geist"],
    });
    return (
      <FloatingPanel defaultSize={{ height: 300, width: 360 }}>
        <FloatingPanel.Trigger asChild>
          <Button variant="outline">Open</Button>
        </FloatingPanel.Trigger>
        <FloatingPanel.Content className="[--space:--spacing(3)] sm:[--space:--spacing(6)]">
          <FloatingPanel.Header>
            <GearSixIcon />
            <FloatingPanel.Title>Settings</FloatingPanel.Title>
            <FloatingPanel.Control>
              <FloatingPanel.Minimize />
              <FloatingPanel.Maximize />
              <FloatingPanel.Restore />
              <FloatingPanel.CloseTrigger asChild>
                <Button aria-label="Close" size="icon-xs">
                  <XIcon aria-hidden />
                </Button>
              </FloatingPanel.CloseTrigger>
            </FloatingPanel.Control>
          </FloatingPanel.Header>
          <FloatingPanel.Body>
            <Field>
              <Field.Label>Font family</Field.Label>
              <Select.Root collection={collection} defaultValue={["Inter"]}>
                <Select.Trigger className="w-full">
                  <Select.ValueText />
                </Select.Trigger>
                <Select.Content>
                  {collection.items.map((item) => (
                    <Select.Item item={item} key={item}>
                      {item}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Field>
            <Field>
              <Field.Label>Font size</Field.Label>
              <NumberInput className="w-full" defaultValue="16">
                <NumberInput.Control>
                  <NumberInput.DecrementTrigger />
                  <NumberInput.Input />
                  <NumberInput.IncrementTrigger />
                </NumberInput.Control>
              </NumberInput>
            </Field>
          </FloatingPanel.Body>
          <FloatingPanel.Footer>
            <Button variant="outline">Save</Button>
          </FloatingPanel.Footer>
        </FloatingPanel.Content>
      </FloatingPanel>
    );
  },
});

export const ControlledPosition = meta.story({
  render: () => {
    const [position, setPosition] = useState({ x: 200, y: 200 });

    return (
      <div className="flex flex-col gap-2">
        <FloatingPanel
          onPositionChange={(details) => setPosition(details.position)}
          position={position}
        >
          <FloatingPanel.Trigger asChild>
            <Button variant="outline">Open</Button>
          </FloatingPanel.Trigger>
          <FloatingPanel.Content>
            <FloatingPanel.Header>
              <GearSixIcon />
              <FloatingPanel.Title>Settings</FloatingPanel.Title>
              <FloatingPanel.Control>
                <FloatingPanel.Minimize />
                <FloatingPanel.Maximize />
                <FloatingPanel.Restore />
                <FloatingPanel.CloseTrigger asChild>
                  <Button aria-label="Close" size="icon-sm">
                    <XIcon aria-hidden />
                  </Button>
                </FloatingPanel.CloseTrigger>
              </FloatingPanel.Control>
            </FloatingPanel.Header>
            <FloatingPanel.Body className="text-center text-muted-foreground text-sm">
              <p>
                Position: ({position.x}, {position.y}).
              </p>
              <p>Use the buttons to move the panel.</p>

              <div className="flex flex-col items-center gap-1">
                <div>
                  <Button
                    aria-label="Move up"
                    onClick={() => setPosition((prev) => ({ ...prev, y: prev.y - 20 }))}
                    size="icon-md"
                    variant="outline"
                  >
                    <CaretUpIcon aria-hidden />
                  </Button>
                </div>
                <div className="flex gap-1">
                  <Button
                    aria-label="Move left"
                    onClick={() => setPosition((prev) => ({ ...prev, x: prev.x - 20 }))}
                    size="icon-md"
                    variant="outline"
                  >
                    <CaretLeftIcon aria-hidden />
                  </Button>
                  <Button
                    aria-label="Move down"
                    onClick={() => setPosition((prev) => ({ ...prev, y: prev.y + 20 }))}
                    size="icon-md"
                    variant="outline"
                  >
                    <CaretDownIcon aria-hidden />
                  </Button>
                  <Button
                    aria-label="Move right"
                    onClick={() => setPosition((prev) => ({ ...prev, x: prev.x + 20 }))}
                    size="icon-md"
                    variant="outline"
                  >
                    <CaretRightIcon aria-hidden />
                  </Button>
                </div>
              </div>
            </FloatingPanel.Body>
          </FloatingPanel.Content>
        </FloatingPanel>
      </div>
    );
  },
});

export const ControlledSize = meta.story({
  render: () => {
    const [size, setSize] = useState({ height: 200, width: 360 });

    return (
      <FloatingPanel onSizeChange={(details) => setSize(details.size)} size={size}>
        <FloatingPanel.Trigger asChild>
          <Button variant="outline">Open</Button>
        </FloatingPanel.Trigger>
        <FloatingPanel.Content>
          <FloatingPanel.Header>
            <GearSixIcon />
            <FloatingPanel.Title>Settings</FloatingPanel.Title>
            <FloatingPanel.Control>
              <FloatingPanel.Minimize />
              <FloatingPanel.Maximize />
              <FloatingPanel.Restore />
              <FloatingPanel.CloseTrigger asChild>
                <Button aria-label="Close" size="icon-sm">
                  <XIcon aria-hidden />
                </Button>
              </FloatingPanel.CloseTrigger>
            </FloatingPanel.Control>
          </FloatingPanel.Header>
          <FloatingPanel.Body className="text-center text-muted-foreground text-sm">
            <p>
              Size: {size.width} × {size.height}.
            </p>
            <p>Use the buttons above or drag the edges to resize.</p>

            <div className="flex gap-2">
              <Button
                className="flex-1"
                onClick={() =>
                  setSize((prev) => ({
                    ...prev,
                    height: prev.height - 40,
                    width: prev.width - 50,
                  }))
                }
                variant="outline"
              >
                Shrink
              </Button>
              <Button
                className="flex-1"
                onClick={() =>
                  setSize((prev) => ({
                    ...prev,
                    height: prev.height + 40,
                    width: prev.width + 50,
                  }))
                }
                variant="outline"
              >
                Grow
              </Button>
            </div>
          </FloatingPanel.Body>
        </FloatingPanel.Content>
      </FloatingPanel>
    );
  },
});
