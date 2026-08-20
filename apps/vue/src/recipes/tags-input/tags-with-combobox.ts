import { useFilter, useListCollection } from "@ark-ui/vue";
import { useTagsInput } from "@ark-ui/vue/tags-input";
import { Combobox, Field, TagsInput } from "@pisagor/vue";
import { computed, defineComponent, h, type PropType, useId } from "vue";

const FRAMEWORK_ITEMS = [
  "React",
  "Solid",
  "Vue",
  "Svelte",
  "Angular",
  "Preact",
  "Next.js",
  "Astro",
] as const;

type ArkPart = Parameters<typeof h>[0];
type ArkProps = Parameters<typeof h>[1];

export const TagsWithCombobox = defineComponent({
  inheritAttrs: false,
  name: "TagsWithCombobox",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props) {
    const uid = useId();

    const filterReturn = useFilter({ sensitivity: "base" });
    const contains = (itemText: string, filterText: string, _item: string) =>
      filterReturn.value.contains(itemText, filterText);
    const { collection, filter } = useListCollection<string>({
      filter: contains,
      initialItems: [...FRAMEWORK_ITEMS],
    });

    const tagsInput = useTagsInput({
      ids: {
        control: `tags-control-${uid}`,
        input: `tags-input-${uid}`,
      },
    });

    const availableItems = computed(() =>
      (collection.value.items ?? []).filter(
        (item: string) => !tagsInput.value.value.includes(item),
      ),
    );

    const addTagIfMissing = (next: string | undefined) => {
      if (!next) return;
      if (tagsInput.value.value.includes(next)) return;
      tagsInput.value.addValue(next);
    };

    return () =>
      h(Field as ArkPart, { class: props.class }, () => [
        h(Field.Label as ArkPart, { for: `tags-input-${uid}` }, () => "Frameworks"),
        h(
          Combobox.Root as ArkPart,
          {
            allowCustomValue: true,
            collection: collection.value,
            ids: {
              control: `tags-control-${uid}`,
              input: `tags-input-${uid}`,
            },
            modelValue: [],
            onInputValueChange: ({ inputValue }: { inputValue: string }) => filter(inputValue),
            onValueChange: (value: string[]) => addTagIfMissing(value[0]),
            selectionBehavior: "clear",
          },
          () => [
            h(
              TagsInput.RootProvider as ArkPart,
              { class: "w-full", value: tagsInput } as unknown as ArkProps,
              {
                default: () =>
                  h(TagsInput.Context as ArkPart, null, {
                    default: (api: { value: string[] }) => [
                      ...api.value.map((tag: string, index: number) =>
                        h(TagsInput.Item as ArkPart, { index, key: tag, value: tag }, () => tag),
                      ),
                      h(Combobox.FieldInput as ArkPart, { asChild: true }, () =>
                        h(TagsInput.Input as ArkPart, { placeholder: "Search framework" }),
                      ),
                    ],
                  }),
              },
            ),
            h(Combobox.Content as ArkPart, null, () =>
              h(Combobox.List as ArkPart, null, () => [
                h(Combobox.Empty as ArkPart, null, () => "No frameworks found"),
                ...availableItems.value.map((item) =>
                  h(Combobox.Item as ArkPart, { item, key: item }, () => item),
                ),
              ]),
            ),
          ],
        ),
      ]);
  },
});
