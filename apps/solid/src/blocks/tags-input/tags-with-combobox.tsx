/** @jsxImportSource solid-js */
import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { useTagsInput } from "@ark-ui/solid/tags-input";
import { tagsWithComboboxBlock } from "@pisagor/recipes/blocks/tags-input";
import { Combobox, Field } from "@pisagor/solid";
import { TagsInput } from "@pisagor/solid/tags-input";
import { createMemo, createUniqueId, For } from "solid-js";

const styles = tagsWithComboboxBlock();

export function TagsWithCombobox() {
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
  const uid = createUniqueId();

  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: frameworkItems,
  });

  const tagsInput = useTagsInput({
    ids: { control: `tags-control-${uid}`, input: `tags-input-${uid}` },
  });

  const availableItems = createMemo(() =>
    collection().items.filter((item) => !tagsInput().value.includes(item)),
  );

  return (
    <Field>
      <Field.Label for={`tags-input-${uid}`}>Frameworks</Field.Label>
      <Combobox.Root
        allowCustomValue
        collection={collection()}
        ids={{ control: `tags-control-${uid}`, input: `tags-input-${uid}` }}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        onValueChange={(value) => {
          const next = value[0];
          if (next && !tagsInput().value.includes(next)) {
            tagsInput().addValue(next);
          }
        }}
        selectionBehavior="clear"
        value={[]}
      >
        <TagsInput.RootProvider class={styles.root()} value={tagsInput}>
          <TagsInput.Context>
            {(api) => (
              <>
                <For each={api().value}>
                  {(tag, index) => (
                    <TagsInput.Item index={index()} value={tag}>
                      {tag}
                    </TagsInput.Item>
                  )}
                </For>
                <Combobox.FieldInput
                  asChild={(props) => (
                    <TagsInput.Input
                      {...props()}
                      placeholder="Search framework"
                    />
                  )}
                />
              </>
            )}
          </TagsInput.Context>
        </TagsInput.RootProvider>
        <Combobox.Content>
          <Combobox.List>
            <Combobox.Empty>
              No frameworks found. Try a different search.
            </Combobox.Empty>
            <For each={availableItems()}>
              {(item) => <Combobox.Item item={item}>{item}</Combobox.Item>}
            </For>
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    </Field>
  );
}
