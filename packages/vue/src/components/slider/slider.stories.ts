import { Field, Slider, Surface } from "@pisagor/vue";
import { computed, ref } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: Slider,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users pick a value along a track by dragging a thumb, optionally with labeled steps.",
      },
    },
  },
  title: "Components/Forms/Slider",
});

export const Default = meta.story({
  render: () => ({
    components: { Slider },
    template: '<Slider :default-value="[20]" />',
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Slider },
    template: `
      <div class="flex flex-col gap-2">
        <Slider :default-value="[40]" label="Primary" show-value variant="primary" />
        <Slider :default-value="[40]" label="Secondary" show-value variant="secondary" />
      </div>
    `,
  }),
});

export const OnSurface = meta.story({
  render: () => ({
    components: { Slider, Surface },
    template: `
      <Surface bordered class="flex flex-col gap-2" padding="md" variant="default">
        <Slider :default-value="[40]" label="Primary" show-value variant="primary" />
        <Slider :default-value="[40]" label="Secondary" show-value variant="secondary" />
      </Surface>
    `,
  }),
});

export const Marks = meta.story({
  render: () => ({
    components: { Slider },
    template: '<Slider :default-value="[5]" :marker-interval="2" :max="12" show-markers />',
  }),
});

export const MinMax = meta.story({
  render: () => ({
    components: { Slider },
    template: '<Slider :default-value="[50]" :max="200" :min="0" label="Volume" show-value />',
  }),
});

export const Range = meta.story({
  render: () => ({
    components: { Slider },
    template: '<Slider :default-value="[40, 60]" />',
  }),
});

export const Step = meta.story({
  render: () => ({
    components: { Slider },
    template: `
      <Slider
        :default-value="[0]"
        :marker-interval="1"
        :marker-labels="['5GB', '25GB', '50GB']"
        :max="2"
        :min="0"
        label="Storage size"
        show-markers
      />
    `,
  }),
});

export const Vertical = meta.story({
  render: () => ({
    components: { Slider },
    template: `
      <div class="flex items-center justify-center gap-6">
        <Slider class="h-40" :default-value="[75]" :max="100" :orientation="'vertical'" :step="1" />
        <Slider class="h-40" :default-value="[25]" :max="100" :orientation="'vertical'" :step="1" />
      </div>
    `,
  }),
});

export const WithLabel = meta.story({
  render: () => ({
    components: { Field, Slider },
    template: `
      <Field>
        <Slider :default-value="[50]" label="Opacity" show-value />
      </Field>
    `,
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { Slider },
    template: '<Slider :default-value="[50]" :invalid="true" />',
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Slider },
    template: '<Slider :default-value="[50]" disabled />',
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Field, Slider },
    setup() {
      const value = ref([40]);
      const isGreaterThan80 = computed(() => (value.value[0] ?? 0) > 80);
      const onValueChange = (next: number[]) => {
        value.value = next;
      };

      return { isGreaterThan80, onValueChange, value };
    },
    template: `
      <div class="flex flex-col gap-2">
        <p class="text-center text-sm">Greater than 80</p>
        <Field>
          <Slider :on-value-change="onValueChange" :value="value" label="Temperature" show-value />
        </Field>
        <p class="text-center">{{ isGreaterThan80 ? "✅" : "❌" }}</p>
      </div>
    `,
  }),
});
