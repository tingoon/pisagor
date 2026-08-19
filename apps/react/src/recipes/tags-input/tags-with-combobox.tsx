import { useFilter, useListCollection } from "@ark-ui/react";
import { useTagsInput } from "@ark-ui/react/tags-input";
import { Combobox } from "@pisagor/react/combobox";
import { Field } from "@pisagor/react/field";
import { TagsInput } from "@pisagor/react/tags-input";
import { useId } from "react";

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

export function TagsWithCombobox() {
  const uid = useId();

  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: [...FRAMEWORK_ITEMS],
  });

  const tagsInput = useTagsInput({
    ids: { control: `tags-control-${uid}`, input: `tags-input-${uid}` },
  });

  const availableItems = collection.items.filter((item: string) => !tagsInput.value.includes(item));

  return (
    <Field>
      <Field.Label htmlFor={`tags-input-${uid}`}>Frameworks</Field.Label>
      <Combobox.Root
        allowCustomValue
        collection={collection}
        ids={{ control: `tags-control-${uid}`, input: `tags-input-${uid}` }}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        onValueChange={(value) => {
          const next = value[0];
          if (next && !tagsInput.value.includes(next)) {
            tagsInput.addValue(next);
          }
        }}
        selectionBehavior="clear"
        value={[]}
      >
        <TagsInput.RootProvider className="w-full" value={tagsInput}>
          <TagsInput.Context>
            {({ value }) => (
              <>
                {value.map((tag, index) => (
                  <TagsInput.Item index={index} key={tag} value={tag}>
                    {tag}
                  </TagsInput.Item>
                ))}
                <Combobox.FieldInput asChild>
                  <TagsInput.Input placeholder="Search framework" />
                </Combobox.FieldInput>
              </>
            )}
          </TagsInput.Context>
        </TagsInput.RootProvider>
        <Combobox.Content>
          <Combobox.List>
            <Combobox.Empty>No frameworks found</Combobox.Empty>
            {availableItems.map((item: string) => (
              <Combobox.Item item={item} key={item}>
                {item}
              </Combobox.Item>
            ))}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    </Field>
  );
}
