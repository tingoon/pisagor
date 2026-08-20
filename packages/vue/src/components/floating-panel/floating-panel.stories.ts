import { createListCollection } from "@ark-ui/vue/collection";
import {
  PhCaretDown,
  PhCaretLeft,
  PhCaretRight,
  PhCaretUp,
  PhGearSix,
  PhX,
} from "@phosphor-icons/vue";
import { Button, Field, FloatingPanel, NumberInput, Select } from "@pisagor/vue";
import { ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: FloatingPanel,
  parameters: {
    docs: {
      description: {
        component:
          "Presents draggable, resizable content in a floating window for tools or inspectors.",
      },
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
  render: () => ({
    components: { Button, Field, FloatingPanel, NumberInput, PhGearSix, PhX, Select },
    setup() {
      const collection = createListCollection({
        items: ["Inter", "Roboto", "Helvetica", "Geist"],
      });
      return { collection };
    },
    template: `
      <FloatingPanel :default-size="{ height: 300, width: 360 }">
        <FloatingPanel.Trigger as-child>
          <Button variant="outline">Open</Button>
        </FloatingPanel.Trigger>
        <FloatingPanel.Content>
          <FloatingPanel.Header>
            <PhGearSix />
            <FloatingPanel.Title>Settings</FloatingPanel.Title>
            <FloatingPanel.Control>
              <FloatingPanel.Minimize />
              <FloatingPanel.Maximize />
              <FloatingPanel.Restore />
              <FloatingPanel.CloseTrigger as-child>
                <Button aria-label="Close" size="icon-xs">
                  <PhX aria-hidden="true" />
                </Button>
              </FloatingPanel.CloseTrigger>
            </FloatingPanel.Control>
          </FloatingPanel.Header>
          <FloatingPanel.Body>
            <Field>
              <Field.Label>Font family</Field.Label>
              <Select.Root :collection="collection" :default-value="['Inter']">
                <Select.Trigger class="w-full">
                  <Select.Value />
                </Select.Trigger>
                <Select.Content>
                  <Select.Item v-for="item in collection.items" :key="item" :item="item">
                    {{ item }}
                  </Select.Item>
                </Select.Content>
              </Select.Root>
            </Field>
            <Field>
              <Field.Label>Font size</Field.Label>
              <NumberInput class="w-full" default-value="16">
                <NumberInput.Group>
                  <NumberInput.Decrement />
                  <NumberInput.Input />
                  <NumberInput.Increment />
                </NumberInput.Group>
              </NumberInput>
            </Field>
          </FloatingPanel.Body>
          <FloatingPanel.Footer>
            <Button variant="outline">Save</Button>
          </FloatingPanel.Footer>
        </FloatingPanel.Content>
      </FloatingPanel>
    `,
  }),
});

export const CustomSpacing = meta.story({
  render: () => ({
    components: { Button, Field, FloatingPanel, NumberInput, PhGearSix, PhX, Select },
    setup() {
      const collection = createListCollection({
        items: ["Inter", "Roboto", "Helvetica", "Geist"],
      });
      return { collection };
    },
    template: `
      <FloatingPanel :default-size="{ height: 300, width: 360 }">
        <FloatingPanel.Trigger as-child>
          <Button variant="outline">Open</Button>
        </FloatingPanel.Trigger>
        <FloatingPanel.Content class="[--space:--spacing(3)] sm:[--space:--spacing(6)]">
          <FloatingPanel.Header>
            <PhGearSix />
            <FloatingPanel.Title>Settings</FloatingPanel.Title>
            <FloatingPanel.Control>
              <FloatingPanel.Minimize />
              <FloatingPanel.Maximize />
              <FloatingPanel.Restore />
              <FloatingPanel.CloseTrigger as-child>
                <Button aria-label="Close" size="icon-xs">
                  <PhX aria-hidden="true" />
                </Button>
              </FloatingPanel.CloseTrigger>
            </FloatingPanel.Control>
          </FloatingPanel.Header>
          <FloatingPanel.Body>
            <Field>
              <Field.Label>Font family</Field.Label>
              <Select.Root :collection="collection" :default-value="['Inter']">
                <Select.Trigger class="w-full">
                  <Select.Value />
                </Select.Trigger>
                <Select.Content>
                  <Select.Item v-for="item in collection.items" :key="item" :item="item">
                    {{ item }}
                  </Select.Item>
                </Select.Content>
              </Select.Root>
            </Field>
            <Field>
              <Field.Label>Font size</Field.Label>
              <NumberInput class="w-full" default-value="16">
                <NumberInput.Group>
                  <NumberInput.Decrement />
                  <NumberInput.Input />
                  <NumberInput.Increment />
                </NumberInput.Group>
              </NumberInput>
            </Field>
          </FloatingPanel.Body>
          <FloatingPanel.Footer>
            <Button variant="outline">Save</Button>
          </FloatingPanel.Footer>
        </FloatingPanel.Content>
      </FloatingPanel>
    `,
  }),
});

export const ControlledPosition = meta.story({
  render: () => ({
    components: {
      Button,
      FloatingPanel,
      PhCaretDown,
      PhCaretLeft,
      PhCaretRight,
      PhCaretUp,
      PhGearSix,
      PhX,
    },
    setup() {
      const position = ref({ x: 200, y: 200 });

      const onPositionChange = (details: { position: { x: number; y: number } }) => {
        position.value = details.position;
      };

      const moveDown = () => {
        position.value = { ...position.value, y: position.value.y + 20 };
      };
      const moveLeft = () => {
        position.value = { ...position.value, x: position.value.x - 20 };
      };
      const moveRight = () => {
        position.value = { ...position.value, x: position.value.x + 20 };
      };
      const moveUp = () => {
        position.value = { ...position.value, y: position.value.y - 20 };
      };

      return { moveDown, moveLeft, moveRight, moveUp, onPositionChange, position };
    },
    template: `
      <div class="flex flex-col gap-2">
        <FloatingPanel :position="position" @position-change="onPositionChange">
          <FloatingPanel.Trigger as-child>
            <Button variant="outline">Open</Button>
          </FloatingPanel.Trigger>
          <FloatingPanel.Content>
            <FloatingPanel.Header>
              <PhGearSix />
              <FloatingPanel.Title>Settings</FloatingPanel.Title>
              <FloatingPanel.Control>
                <FloatingPanel.Minimize />
                <FloatingPanel.Maximize />
                <FloatingPanel.Restore />
                <FloatingPanel.CloseTrigger as-child>
                  <Button aria-label="Close" size="icon-sm">
                    <PhX aria-hidden="true" />
                  </Button>
                </FloatingPanel.CloseTrigger>
              </FloatingPanel.Control>
            </FloatingPanel.Header>
            <FloatingPanel.Body class="text-center text-muted-foreground text-sm">
              <p>Position: ({{ position.x }}, {{ position.y }}).</p>
              <p>Use the buttons to move the panel.</p>
              <div class="flex flex-col items-center gap-1">
                <div>
                  <Button aria-label="Move up" @click="moveUp" size="icon-md" variant="outline">
                    <PhCaretUp aria-hidden="true" />
                  </Button>
                </div>
                <div class="flex gap-1">
                  <Button aria-label="Move left" @click="moveLeft" size="icon-md" variant="outline">
                    <PhCaretLeft aria-hidden="true" />
                  </Button>
                  <Button aria-label="Move down" @click="moveDown" size="icon-md" variant="outline">
                    <PhCaretDown aria-hidden="true" />
                  </Button>
                  <Button aria-label="Move right" @click="moveRight" size="icon-md" variant="outline">
                    <PhCaretRight aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </FloatingPanel.Body>
          </FloatingPanel.Content>
        </FloatingPanel>
      </div>
    `,
  }),
});

export const ControlledSize = meta.story({
  render: () => ({
    components: { Button, FloatingPanel, PhGearSix, PhX },
    setup() {
      const size = ref({ height: 200, width: 360 });

      const onSizeChange = (details: { size: { height: number; width: number } }) => {
        size.value = details.size;
      };

      const grow = () => {
        size.value = { height: size.value.height + 40, width: size.value.width + 50 };
      };
      const shrink = () => {
        size.value = { height: size.value.height - 40, width: size.value.width - 50 };
      };

      return { grow, onSizeChange, shrink, size };
    },
    template: `
      <FloatingPanel :size="size" @size-change="onSizeChange">
        <FloatingPanel.Trigger as-child>
          <Button variant="outline">Open</Button>
        </FloatingPanel.Trigger>
        <FloatingPanel.Content>
          <FloatingPanel.Header>
            <PhGearSix />
            <FloatingPanel.Title>Settings</FloatingPanel.Title>
            <FloatingPanel.Control>
              <FloatingPanel.Minimize />
              <FloatingPanel.Maximize />
              <FloatingPanel.Restore />
              <FloatingPanel.CloseTrigger as-child>
                <Button aria-label="Close" size="icon-sm">
                  <PhX aria-hidden="true" />
                </Button>
              </FloatingPanel.CloseTrigger>
            </FloatingPanel.Control>
          </FloatingPanel.Header>
          <FloatingPanel.Body class="text-center text-muted-foreground text-sm">
            <p>Size: {{ size.width }} × {{ size.height }}.</p>
            <p>Use the buttons above or drag the edges to resize.</p>
            <div class="flex gap-2">
              <Button class="flex-1" @click="shrink" variant="outline">Shrink</Button>
              <Button class="flex-1" @click="grow" variant="outline">Grow</Button>
            </div>
          </FloatingPanel.Body>
        </FloatingPanel.Content>
      </FloatingPanel>
    `,
  }),
});
