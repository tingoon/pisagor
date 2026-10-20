import { useFilter, useListCollection, useTagsInput } from "@ark-ui/solid";
import { XIcon } from "@squidlab/phosphor-solid/icons";
import { Combobox, Field, InputGroup, TagsInput } from "@pisagor/solid";
import { createMemo, createUniqueId, For } from "solid-js";
import { Portal } from "solid-js/web";

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
  const uid = createUniqueId();

  const filterFn = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: filterFn().contains,
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
        onValueChange={(details) => {
          const next = details.value[0];
          if (next && !tagsInput().value.includes(next)) {
            tagsInput().addValue(next);
          }
        }}
        selectionBehavior="clear"
        value={[]}
      >
        <TagsInput.RootProvider class="w-full" value={tagsInput}>
          <TagsInput.Control
            asChild={(controlProps) => (
              <InputGroup {...controlProps()}>
                <TagsInput.Context>
                  {(api) => (
                    <>
                      <For each={api().value}>
                        {(tag, index) => (
                          <TagsInput.Item index={index()} value={tag}>
                            <TagsInput.ItemPreview>
                              <TagsInput.ItemText>{tag}</TagsInput.ItemText>
                              <TagsInput.ItemDeleteTrigger
                                asChild={(triggerProps) => (
                                  <InputGroup.Button
                                    {...triggerProps()}
                                    size="icon-xs"
                                    variant="ghost"
                                  >
                                    <XIcon aria-hidden />
                                  </InputGroup.Button>
                                )}
                              />
                            </TagsInput.ItemPreview>
                            <TagsInput.ItemInput
                              asChild={(inputProps) => (
                                <InputGroup.Input {...inputProps()} />
                              )}
                            />
                          </TagsInput.Item>
                        )}
                      </For>
                      <Combobox.Input
                        asChild={(props) => (
                          <TagsInput.Input
                            {...props()}
                            asChild={(inputProps) => (
                              <InputGroup.Input
                                {...inputProps()}
                                placeholder="Search framework"
                              />
                            )}
                          />
                        )}
                      />
                    </>
                  )}
                </TagsInput.Context>
              </InputGroup>
            )}
          />
        </TagsInput.RootProvider>
        <Portal>
          <Combobox.Positioner>
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
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>
    </Field>
  );
}
