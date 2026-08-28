import { PhTextB, PhTextItalic, PhTextUnderline } from "@phosphor-icons/vue";
import { ToggleGroup } from "@pisagor/vue";
import { ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: ToggleGroup,
  parameters: {
    docs: {
      description: {
        component: "Select one or more options from a compact set.",
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
  title: "Components/Forms/Toggle Group",
});

export const Default = meta.story({
  render: () => ({
    components: { ToggleGroup },
    setup() {
      return {
        items: [
          { children: "Low", value: "low" },
          { children: "Medium", value: "med" },
          { children: "High", value: "high" },
        ],
      };
    },
    template: '<ToggleGroup :items="items" :multiple="true" :spacing="0" />',
  }),
});

export const Sizes = meta.story({
  render: () => ({
    components: { PhTextB, PhTextItalic, PhTextUnderline, ToggleGroup },
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <ToggleGroup.Root :default-value="['bold']" multiple size="sm">
          <ToggleGroup.Item aria-label="Toggle bold" value="bold">
            <PhTextB />
          </ToggleGroup.Item>
          <ToggleGroup.Item aria-label="Toggle italic" value="italic">
            <PhTextItalic />
          </ToggleGroup.Item>
          <ToggleGroup.Item aria-label="Toggle underline" value="underline">
            <PhTextUnderline />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
        <ToggleGroup.Root :default-value="['bold']" multiple size="lg">
          <ToggleGroup.Item aria-label="Toggle bold" value="bold">
            <PhTextB />
          </ToggleGroup.Item>
          <ToggleGroup.Item aria-label="Toggle italic" value="italic">
            <PhTextItalic />
          </ToggleGroup.Item>
          <ToggleGroup.Item aria-label="Toggle underline" value="underline">
            <PhTextUnderline />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { PhTextB, PhTextItalic, PhTextUnderline, ToggleGroup },
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <ToggleGroup.Root :default-value="['bold']" multiple variant="ghost">
          <ToggleGroup.Item aria-label="Toggle bold" value="bold">
            <PhTextB />
          </ToggleGroup.Item>
          <ToggleGroup.Item aria-label="Toggle italic" value="italic">
            <PhTextItalic />
          </ToggleGroup.Item>
          <ToggleGroup.Item aria-label="Toggle underline" value="underline">
            <PhTextUnderline />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
        <ToggleGroup.Root :default-value="['bold']" multiple variant="outline">
          <ToggleGroup.Item aria-label="Toggle bold" value="bold">
            <PhTextB />
          </ToggleGroup.Item>
          <ToggleGroup.Item aria-label="Toggle italic" value="italic">
            <PhTextItalic />
          </ToggleGroup.Item>
          <ToggleGroup.Item aria-label="Toggle underline" value="underline">
            <PhTextUnderline />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>
    `,
  }),
});

export const Horizontal = meta.story({
  render: () => ({
    components: { PhTextB, PhTextItalic, PhTextUnderline, ToggleGroup },
    template: `
      <ToggleGroup.Root :default-value="['bold']" orientation="horizontal" variant="outline">
        <ToggleGroup.Item aria-label="Toggle bold" value="bold">
          <PhTextB />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle italic" value="italic">
          <PhTextItalic />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle underline" value="underline">
          <PhTextUnderline />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    `,
  }),
});

export const Vertical = meta.story({
  render: () => ({
    components: { PhTextB, PhTextItalic, PhTextUnderline, ToggleGroup },
    template: `
      <ToggleGroup.Root :default-value="['bold']" orientation="vertical" variant="outline">
        <ToggleGroup.Item aria-label="Toggle bold" value="bold">
          <PhTextB />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle italic" value="italic">
          <PhTextItalic />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle underline" value="underline">
          <PhTextUnderline />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    `,
  }),
});

export const Spacing = meta.story({
  render: () => ({
    components: { PhTextB, PhTextItalic, PhTextUnderline, ToggleGroup },
    template: `
      <ToggleGroup.Root :default-value="['italic']" multiple :spacing="2" variant="outline">
        <ToggleGroup.Item aria-label="Toggle bold" value="bold">
          <PhTextB />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle italic" value="italic">
          <PhTextItalic />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle underline" value="underline">
          <PhTextUnderline />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    `,
  }),
});

export const DisabledItem = meta.story({
  render: () => ({
    components: { PhTextB, PhTextItalic, PhTextUnderline, ToggleGroup },
    template: `
      <ToggleGroup.Root :default-value="['bold']" multiple>
        <ToggleGroup.Item aria-label="Toggle bold" value="bold">
          <PhTextB />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle italic" disabled value="italic">
          <PhTextItalic />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle underline" value="underline">
          <PhTextUnderline />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    `,
  }),
});

export const FontWeight = meta.story({
  render: () => ({
    components: { ToggleGroup },
    setup() {
      const fontWeights = [
        { className: "font-light", label: "Light", value: "light" },
        { className: "font-normal", label: "Normal", value: "normal" },
        { className: "font-medium", label: "Medium", value: "medium" },
        { className: "font-bold", label: "Bold", value: "bold" },
      ] as const;
      const value = ref<string[]>(["normal"]);
      const handleValueChange = (next: string | string[]) => {
        value.value = Array.isArray(next) ? next : [next];
      };

      return { fontWeights, handleValueChange, value };
    },
    template: `
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-2">
          <span class="font-medium text-sm">Font weight</span>
          <ToggleGroup.Root
            class="flex-wrap"
            :multiple="false"
            :onValueChange="handleValueChange"
            size="lg"
            :spacing="2"
            :value="value"
            variant="outline"
          >
            <ToggleGroup.Item
              v-for="weight in fontWeights"
              :key="weight.value"
              :aria-label="\`Set font weight to \${weight.label}\`"
              class="size-16 flex-col gap-1 py-2"
              :value="weight.value"
            >
              <span class="text-lg" :class="weight.className">Aa</span>
              <span class="text-muted-foreground text-xs">{{ weight.label }}</span>
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </div>
      </div>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { PhTextB, PhTextItalic, PhTextUnderline, ToggleGroup },
    template: `
      <ToggleGroup.Root :default-value="['bold']" disabled multiple>
        <ToggleGroup.Item aria-label="Toggle bold" value="bold">
          <PhTextB />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle italic" value="italic">
          <PhTextItalic />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle underline" value="underline">
          <PhTextUnderline />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    `,
  }),
});

export const Single = meta.story({
  render: () => ({
    components: { PhTextB, PhTextItalic, PhTextUnderline, ToggleGroup },
    template: `
      <ToggleGroup.Root :default-value="['bold']" :multiple="false">
        <ToggleGroup.Item aria-label="Toggle bold" value="bold">
          <PhTextB />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle italic" value="italic">
          <PhTextItalic />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle underline" value="underline">
          <PhTextUnderline />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { PhTextB, PhTextItalic, PhTextUnderline, ToggleGroup },
    setup() {
      const value = ref(["bold"]);
      const handleValueChange = (next: string | string[]) => {
        value.value = Array.isArray(next) ? next : [next];
      };

      return { handleValueChange, value };
    },
    template: `
      <div class="flex flex-col items-center gap-2">
        <ToggleGroup.Root :onValueChange="handleValueChange" :value="value">
          <ToggleGroup.Item aria-label="Toggle bold" value="bold">
            <PhTextB />
          </ToggleGroup.Item>
          <ToggleGroup.Item aria-label="Toggle italic" value="italic">
            <PhTextItalic />
          </ToggleGroup.Item>
          <ToggleGroup.Item aria-label="Toggle underline" value="underline">
            <PhTextUnderline />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
        <p class="text-center text-muted-foreground text-sm">
          {{ value.length > 0 ? value.join(", ") : "None" }}
        </p>
      </div>
    `,
  }),
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `ToggleGroup.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => ({
    components: { PhTextB, PhTextItalic, PhTextUnderline, ToggleGroup },
    template: `
      <ToggleGroup.Root :default-value="['bold']" multiple>
        <ToggleGroup.Item aria-label="Toggle bold" value="bold">
          <PhTextB />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle italic" value="italic">
          <PhTextItalic />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle underline" value="underline">
          <PhTextUnderline />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    `,
  }),
});
