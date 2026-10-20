import {
  Portal,
  useFilter,
  useListCollection,
  useTagsInput,
} from "@ark-ui/react";
import { XIcon } from "@phosphor-icons/react";
import { Combobox, Field, InputGroup, TagsInput } from "@pisagor/react";
import { useId } from "react";

export function WithCombobox() {
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
  const uid = useId();

  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: frameworkItems,
  });

  const tagsInput = useTagsInput({
    ids: { control: `tags-control-${uid}`, input: `tags-input-${uid}` },
  });

  const availableItems = collection.items.filter(
    (item) => !tagsInput.value.includes(item),
  );

  return (
    <Field>
      <Field.Label htmlFor={`tags-input-${uid}`}>Frameworks</Field.Label>
      <Combobox.Root
        allowCustomValue
        collection={collection}
        ids={{ control: `tags-control-${uid}`, input: `tags-input-${uid}` }}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        onValueChange={(details) => {
          const next = details.value[0];
          if (next && !tagsInput.value.includes(next)) {
            tagsInput.addValue(next);
          }
        }}
        selectionBehavior="clear"
        value={[]}
      >
        <TagsInput.RootProvider className="w-full" value={tagsInput}>
          <TagsInput.Control asChild>
            <InputGroup>
              <TagsInput.Context>
                {({ value }) => (
                  <>
                    {value.map((tag, index) => (
                      <TagsInput.Item index={index} key={tag} value={tag}>
                        <TagsInput.ItemPreview>
                          <TagsInput.ItemText>{tag}</TagsInput.ItemText>
                          <TagsInput.ItemDeleteTrigger asChild>
                            <InputGroup.Button size="icon-xs" variant="ghost">
                              <XIcon aria-hidden />
                            </InputGroup.Button>
                          </TagsInput.ItemDeleteTrigger>
                        </TagsInput.ItemPreview>
                        <TagsInput.ItemInput asChild>
                          <InputGroup.Input />
                        </TagsInput.ItemInput>
                      </TagsInput.Item>
                    ))}
                    <Combobox.Input asChild>
                      <TagsInput.Input asChild>
                        <InputGroup.Input placeholder="Search framework" />
                      </TagsInput.Input>
                    </Combobox.Input>
                  </>
                )}
              </TagsInput.Context>
            </InputGroup>
          </TagsInput.Control>
        </TagsInput.RootProvider>
        <Portal>
          <Combobox.Positioner>
            <Combobox.Content>
              <Combobox.List>
                <Combobox.Empty>
                  No frameworks found. Try a different search.
                </Combobox.Empty>
                {availableItems.map((item) => (
                  <Combobox.Item item={item} key={item}>
                    {item}
                  </Combobox.Item>
                ))}
              </Combobox.List>
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>
    </Field>
  );
}
