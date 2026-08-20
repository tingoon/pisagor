import { PhThermometer } from "@phosphor-icons/vue";
import { CircularSlider, Surface } from "@pisagor/vue";
import { computed, h, ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: CircularSlider,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users choose a value by dragging around a circular control instead of a straight track.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Control: CircularSlider.Control,
    Marker: CircularSlider.Marker,
    MarkerGroup: CircularSlider.MarkerGroup,
    Thumb: CircularSlider.Thumb,
    Value: CircularSlider.Value,
  },
  title: "Components/Forms/Circular Slider",
});

export const Default = meta.story({
  render: () => ({
    components: { CircularSlider },
    template: `
      <CircularSlider aria-label="Angle" :default-value="45">
        <CircularSlider.Value suffix="°" />
      </CircularSlider>
    `,
  }),
});

export const OnSurface = meta.story({
  render: () => ({
    components: { CircularSlider, Surface },
    template: `
      <Surface bordered padding="md" variant="default">
        <CircularSlider aria-label="Angle" :default-value="45">
          <CircularSlider.Value suffix="°" />
        </CircularSlider>
      </Surface>
    `,
  }),
});

export const Sizes = meta.story({
  render: () => ({
    components: { CircularSlider },
    setup() {
      const sizes = [120, 180, 240];
      return { sizes };
    },
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <CircularSlider
          v-for="size in sizes"
          :key="size"
          aria-label="Angle"
          :default-value="45"
          :size="size"
        >
          <CircularSlider.Value suffix="°" />
        </CircularSlider>
      </div>
    `,
  }),
});

export const Step = meta.story({
  render: () => ({
    components: { CircularSlider },
    template:
      '<CircularSlider aria-label="Angle" :default-value="120" markers markers-at-steps :step="60" />',
  }),
});

export const Thickness = meta.story({
  render: () => ({
    components: { CircularSlider },
    template: '<CircularSlider aria-label="Angle" :default-value="45" :thickness="14" />',
  }),
});

export const WithValue = meta.story({
  render: () => ({
    components: { CircularSlider },
    setup() {
      const prefix = () => h(PhThermometer, { class: "size-4" });
      return { prefix };
    },
    template: `
      <CircularSlider aria-label="Angle" :default-value="90" :size="120" :thickness="10">
        <CircularSlider.Value :prefix="prefix()" suffix="°" />
      </CircularSlider>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { CircularSlider },
    template: '<CircularSlider aria-label="Angle" :default-value="45" disabled />',
  }),
});

export const CustomMarkers = meta.story({
  render: () => ({
    components: { CircularSlider },
    template:
      '<CircularSlider aria-label="Angle" :default-value="45" :markers="[0, 90, 180, 270]" />',
  }),
});

export const WithMarkers = meta.story({
  render: () => ({
    components: { CircularSlider },
    template: '<CircularSlider aria-label="Angle" :default-value="45" markers />',
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { CircularSlider },
    setup() {
      const value = ref(45);
      const isGreaterThan180 = computed(() => value.value > 180);
      const onValueChange = (next: number) => {
        value.value = next;
      };
      return { isGreaterThan180, onValueChange, value };
    },
    template: `
      <div class="flex flex-col gap-2">
        <div class="text-muted-foreground text-sm">More than: 180</div>
        <CircularSlider aria-label="Angle" :on-value-change="onValueChange" :value="value" />
        <div class="text-center text-muted-foreground text-sm">{{ isGreaterThan180 ? '✅' : '❌' }}</div>
      </div>
    `,
  }),
});
