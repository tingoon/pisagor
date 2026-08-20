import { useListCollection } from "@ark-ui/vue/collection";
import { useFilter } from "@ark-ui/vue/locale";
import { useTagsInput } from "@ark-ui/vue/tags-input";
import { Button, Combobox, Field, Surface, TagsInput } from "@pisagor/vue";
import { computed, ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: TagsInput,
  parameters: {
    docs: {
      description: {
        component: "Lets users enter multiple values as tags.",
      },
    },
  },
  subcomponents: {
    ClearTrigger: TagsInput.ClearTrigger,
    Control: TagsInput.Control,
    Input: TagsInput.Input,
    Item: TagsInput.Item,
    ItemDeleteTrigger: TagsInput.ItemDeleteTrigger,
    ItemInput: TagsInput.ItemInput,
    ItemPreview: TagsInput.ItemPreview,
    ItemText: TagsInput.ItemText,
  },
  title: "Components/Forms/Tags Input",
});

export const Default = meta.story({
  render: () => ({
    components: { TagsInput },
    setup() {
      return {
        value: ["React", "Vue"],
      };
    },
    template: '<TagsInput :defaultValue="value" clearable placeholder="Add a tag..." />',
  }),
});

export const Sizes = meta.story({
  render: () => ({
    components: { Field, TagsInput },
    setup() {
      const defaultValue = ["React", "Solid"];
      const sizes = ["sm", "md", "lg"] as const;

      return { defaultValue, sizes };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Field v-for="size in sizes" :key="size">
          <Field.Label>Frameworks</Field.Label>
          <TagsInput class="w-full" :defaultValue="defaultValue" :size="size" />
        </Field>
      </div>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { TagsInput },
    setup() {
      const defaultValue = ["React", "Solid"];

      return { defaultValue };
    },
    template: `
      <div class="flex flex-col gap-2">
        <TagsInput class="w-full" :defaultValue="defaultValue" variant="primary" />
        <TagsInput class="w-full" :defaultValue="defaultValue" variant="secondary" />
      </div>
    `,
  }),
});

export const OnSurface = meta.story({
  parameters: { layout: "fullscreen" },
  render: () => ({
    components: { Surface, TagsInput },
    setup() {
      const defaultValue = ["React", "Solid"];

      return { defaultValue };
    },
    template: `
      <Surface bordered padding="md" variant="default">
        <div class="flex flex-col gap-2">
          <TagsInput class="w-full" :defaultValue="defaultValue" variant="primary" />
          <TagsInput class="w-full" :defaultValue="defaultValue" variant="secondary" />
        </div>
      </Surface>
    `,
  }),
});

export const BlurBehavior = meta.story({
  render: () => ({
    components: { Field, TagsInput },
    template: `
      <Field>
        <Field.Label>Frameworks</Field.Label>
        <TagsInput blurBehavior="add" class="w-full" :defaultValue="['React']" />
      </Field>
    `,
  }),
});

export const CustomDelimiter = meta.story({
  render: () => ({
    components: { Field, TagsInput },
    setup() {
      const tagDelimiter = /[,\s]+/;

      return { tagDelimiter };
    },
    template: `
      <Field>
        <Field.Label>Frameworks</Field.Label>
        <TagsInput class="w-full" :defaultValue="['React']" :delimiter="tagDelimiter" />
      </Field>
    `,
  }),
});

export const DisableEditing = meta.story({
  render: () => ({
    components: { Field, TagsInput },
    template: `
      <Field>
        <Field.Label>Frameworks</Field.Label>
        <TagsInput class="w-full" :defaultValue="['React', 'Solid']" :editable="false" />
      </Field>
    `,
  }),
});

export const MaxTags = meta.story({
  render: () => ({
    components: { Field, TagsInput },
    template: `
      <Field>
        <Field.Label>Frameworks (max 3)</Field.Label>
        <TagsInput class="w-full" :defaultValue="['React', 'Solid']" :max="3" />
      </Field>
    `,
  }),
});

export const PasteBehavior = meta.story({
  render: () => ({
    components: { Field, TagsInput },
    template: `
      <Field>
        <Field.Label>Frameworks</Field.Label>
        <TagsInput addOnPaste class="w-full" :defaultValue="[]" delimiter="," />
      </Field>
    `,
  }),
});

export const SanitizeValue = meta.story({
  render: () => ({
    components: { Field, TagsInput },
    setup() {
      const sanitizeValue = (value: string) => value.trim().toLowerCase();

      return { sanitizeValue };
    },
    template: `
      <Field>
        <Field.Label>Frameworks</Field.Label>
        <TagsInput class="w-full" :defaultValue="['react']" :sanitizeValue="sanitizeValue" />
      </Field>
    `,
  }),
});

export const Validation = meta.story({
  render: () => ({
    components: { Field, TagsInput },
    setup() {
      const validTagPattern = /^[a-zA-Z0-9-]+$/;
      const validate = ({ inputValue, value }: { inputValue: string; value: string[] }) => {
        const next = inputValue.trim();
        return (
          Boolean(next) && !value.includes(next) && next.length >= 3 && validTagPattern.test(next)
        );
      };

      return { validate };
    },
    template: `
      <Field>
        <Field.Label>Min 3 chars, alphanumeric + hyphen</Field.Label>
        <TagsInput class="w-full" :validate="validate" />
      </Field>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { TagsInput },
    template: "<TagsInput class=\"w-full\" :defaultValue=\"['React', 'Solid', 'Vue']\" disabled />",
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { TagsInput },
    template: '<TagsInput class="w-full" :defaultValue="[\'React\']" invalid />',
  }),
});

export const WithCombobox = meta.story({
  render: () => ({
    components: { Combobox, Field, TagsInput },
    setup() {
      const frameworkItems = [
        "React",
        "Solid",
        "Vue",
        "Svelte",
        "Angular",
        "Preact",
        "Next.js",
        "Astro",
      ];

      const filterUtils = useFilter({ sensitivity: "base" });
      const { collection, filter } = useListCollection({
        filter: filterUtils.value.contains,
        initialItems: frameworkItems,
      });

      const tagsInput = useTagsInput({
        ids: { control: "tags-control", input: "tags-input" },
      });

      const availableItems = computed(() =>
        collection.value.items.filter((item) => !tagsInput.value.value.includes(item)),
      );

      const handleValueChange = (value: string[]) => {
        const next = value[0];
        if (next && !tagsInput.value.value.includes(next)) {
          tagsInput.value.addValue(next);
        }
      };

      return { availableItems, collection, filter, handleValueChange, tagsInput };
    },
    template: `
      <Field>
        <Field.Label for="tags-input">Frameworks</Field.Label>
        <Combobox.Root
          allowCustomValue
          :collection="collection"
          :ids="{ control: 'tags-control', input: 'tags-input' }"
          selectionBehavior="clear"
          :value="[]"
          :onValueChange="handleValueChange"
          @input-value-change="({ inputValue }) => filter(inputValue)"
        >
          <TagsInput.RootProvider class="w-full" :value="tagsInput">
            <TagsInput.Context v-slot="{ value }">
              <TagsInput.Item v-for="(tag, index) in value" :key="tag" :index="index" :value="tag">
                {{ tag }}
              </TagsInput.Item>
              <Combobox.FieldInput as-child>
                <TagsInput.Input placeholder="Search framework" />
              </Combobox.FieldInput>
            </TagsInput.Context>
          </TagsInput.RootProvider>
          <Combobox.Content>
            <Combobox.List>
              <Combobox.Empty>No frameworks found. Try a different search.</Combobox.Empty>
              <Combobox.Item v-for="item in availableItems" :key="item" :item="item">
                {{ item }}
              </Combobox.Item>
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Root>
      </Field>
    `,
  }),
});

export const MaxLength = meta.story({
  render: () => ({
    components: { Field, TagsInput },
    template: `
      <Field>
        <Field.Label>Frameworks (max 10 chars)</Field.Label>
        <TagsInput class="w-full" :defaultValue="['React']" :maxLength="10" />
      </Field>
    `,
  }),
});

export const MaxWithOverflow = meta.story({
  render: () => ({
    components: { Field, TagsInput },
    template: `
      <Field>
        <Field.Label>Frameworks</Field.Label>
        <TagsInput allowOverflow class="w-full" :defaultValue="['React', 'Solid', 'Vue']" :max="3" />
      </Field>
    `,
  }),
});

export const ControlledInputValue = meta.story({
  render: () => ({
    components: { Button, Field, TagsInput },
    setup() {
      const inputValue = ref("");

      return { inputValue };
    },
    template: `
      <div class="flex flex-col gap-3">
        <div class="flex flex-wrap gap-2">
          <Button size="sm" variant="outline" @click="inputValue = 'React'">Set "React"</Button>
          <Button size="sm" variant="outline" @click="inputValue = ''">Clear</Button>
        </div>
        <Field>
          <Field.Label>Frameworks</Field.Label>
          <TagsInput
            class="w-full"
            :defaultValue="['React']"
            :inputValue="inputValue"
            @input-value-change="(details) => (inputValue = details.inputValue)"
          />
        </Field>
      </div>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Field, TagsInput },
    setup() {
      const value = ref(["React", "Solid"]);
      const onValueChange = (next: string[]) => {
        value.value = next;
      };

      return { onValueChange, value };
    },
    template: `
      <Field>
        <Field.Label>Frameworks</Field.Label>
        <TagsInput class="w-full" :onValueChange="onValueChange" :value="value" />
      </Field>
    `,
  }),
});
