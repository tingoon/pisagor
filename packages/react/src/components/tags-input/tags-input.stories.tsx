import { useFilter, useListCollection } from "@ark-ui/react";
import { useTagsInput } from "@ark-ui/react/tags-input";
import { Button, Combobox, Field, TagsInput } from "@pisagor/react";
import { useId, useState } from "react";
import preview, { SurfaceDecorator } from "#/storybook/preview";

const meta = preview.meta({
  component: TagsInput,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users add and remove multiple tags or chips as they build a list of values.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "standard",
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
  render: () => {
    const defaultValue = ["React", "Solid", "Vue", "Svelte"];
    return (
      <TagsInput className="w-full" defaultValue={defaultValue}>
        <TagsInput.Context>
          {({ value }) =>
            value.map((value, index) => (
              <TagsInput.Item index={index} key={value} value={value}>
                {value}
              </TagsInput.Item>
            ))
          }
        </TagsInput.Context>
      </TagsInput>
    );
  },
});

export const Sizes = meta.story({
  render: () => {
    const defaultValue = ["React", "Solid"];

    return (
      <div className="flex flex-col gap-2">
        {(["sm", "md", "lg"] as const).map((size) => (
          <Field key={size}>
            <Field.Label>Frameworks</Field.Label>
            <TagsInput className="w-full" defaultValue={defaultValue} size={size}>
              <TagsInput.Context>
                {({ value }) =>
                  value.map((tag, index) => (
                    <TagsInput.Item index={index} key={tag} value={tag}>
                      {tag}
                    </TagsInput.Item>
                  ))
                }
              </TagsInput.Context>
            </TagsInput>
          </Field>
        ))}
      </div>
    );
  },
});

export const Variants = meta.story({
  render: () => {
    const defaultValue = ["React", "Solid"];

    return (
      <div className="flex flex-col gap-2">
        <TagsInput className="w-full" defaultValue={defaultValue} variant="primary">
          <TagsInput.Context>
            {({ value }) =>
              value.map((tag, index) => (
                <TagsInput.Item index={index} key={tag} value={tag}>
                  {tag}
                </TagsInput.Item>
              ))
            }
          </TagsInput.Context>
        </TagsInput>
        <TagsInput className="w-full" defaultValue={defaultValue} variant="secondary">
          <TagsInput.Context>
            {({ value }) =>
              value.map((tag, index) => (
                <TagsInput.Item index={index} key={tag} value={tag}>
                  {tag}
                </TagsInput.Item>
              ))
            }
          </TagsInput.Context>
        </TagsInput>
      </div>
    );
  },
});

export const OnSurface = Variants.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const BlurBehavior = meta.story({
  render: () => (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput blurBehavior="add" className="w-full" defaultValue={["React"]}>
        <TagsInput.Context>
          {({ value }) =>
            value.map((tag, index) => (
              <TagsInput.Item index={index} key={tag} value={tag}>
                {tag}
              </TagsInput.Item>
            ))
          }
        </TagsInput.Context>
      </TagsInput>
    </Field>
  ),
});

export const CustomDelimiter = meta.story({
  render: () => {
    const tagDelimiter = /[,\s]+/;
    return (
      <Field>
        <Field.Label>Frameworks</Field.Label>
        <TagsInput className="w-full" defaultValue={["React"]} delimiter={tagDelimiter}>
          <TagsInput.Context>
            {({ value }) =>
              value.map((tag, index) => (
                <TagsInput.Item index={index} key={tag} value={tag}>
                  {tag}
                </TagsInput.Item>
              ))
            }
          </TagsInput.Context>
        </TagsInput>
      </Field>
    );
  },
});

export const DisableEditing = meta.story({
  render: () => (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput className="w-full" defaultValue={["React", "Solid"]} editable={false}>
        <TagsInput.Context>
          {({ value }) =>
            value.map((tag, index) => (
              <TagsInput.Item index={index} key={tag} value={tag}>
                {tag}
              </TagsInput.Item>
            ))
          }
        </TagsInput.Context>
      </TagsInput>
    </Field>
  ),
});

export const MaxTags = meta.story({
  render: () => (
    <Field>
      <Field.Label>Frameworks (max 3)</Field.Label>
      <TagsInput className="w-full" defaultValue={["React", "Solid"]} max={3}>
        <TagsInput.Context>
          {({ value }) =>
            value.map((tag, index) => (
              <TagsInput.Item index={index} key={tag} value={tag}>
                {tag}
              </TagsInput.Item>
            ))
          }
        </TagsInput.Context>
      </TagsInput>
    </Field>
  ),
});

export const PasteBehavior = meta.story({
  render: () => (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput addOnPaste className="w-full" defaultValue={[]} delimiter=",">
        <TagsInput.Context>
          {({ value }) =>
            value.map((tag, index) => (
              <TagsInput.Item index={index} key={tag} value={tag}>
                {tag}
              </TagsInput.Item>
            ))
          }
        </TagsInput.Context>
      </TagsInput>
    </Field>
  ),
});

export const SanitizeValue = meta.story({
  render: () => (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput
        className="w-full"
        defaultValue={["react"]}
        sanitizeValue={(value) => value.trim().toLowerCase()}
      >
        <TagsInput.Context>
          {({ value }) =>
            value.map((tag, index) => (
              <TagsInput.Item index={index} key={tag} value={tag}>
                {tag}
              </TagsInput.Item>
            ))
          }
        </TagsInput.Context>
      </TagsInput>
    </Field>
  ),
});

export const Validation = meta.story({
  render: () => {
    const validTagPattern = /^[a-zA-Z0-9-]+$/;
    return (
      <Field>
        <Field.Label>Min 3 chars, alphanumeric + hyphen</Field.Label>
        <TagsInput
          className="w-full"
          validate={({ value, inputValue }) => {
            const next = inputValue.trim();
            return (
              Boolean(next) &&
              !value.includes(next) &&
              next.length >= 3 &&
              validTagPattern.test(next)
            );
          }}
        >
          <TagsInput.Context>
            {({ value }) =>
              value.map((tag, index) => (
                <TagsInput.Item index={index} key={tag} value={tag}>
                  {tag}
                </TagsInput.Item>
              ))
            }
          </TagsInput.Context>
        </TagsInput>
      </Field>
    );
  },
});

export const Disabled = meta.story({
  args: {
    defaultValue: ["React", "Solid", "Vue"],
    disabled: true,
  },
  render: (args) => (
    <TagsInput {...args} className="w-full">
      <TagsInput.Context>
        {({ value }) =>
          value.map((tag, index) => (
            <TagsInput.Item index={index} key={tag} value={tag}>
              {tag}
            </TagsInput.Item>
          ))
        }
      </TagsInput.Context>
    </TagsInput>
  ),
});

export const Invalid = meta.story({
  args: {
    defaultValue: ["React"],
    invalid: true,
  },
  render: (args) => (
    <TagsInput {...args} className="w-full">
      <TagsInput.Context>
        {({ value }) =>
          value.map((tag, index) => (
            <TagsInput.Item index={index} key={tag} value={tag}>
              {tag}
            </TagsInput.Item>
          ))
        }
      </TagsInput.Context>
    </TagsInput>
  ),
});

export const WithCombobox = meta.story({
  render: () => {
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

    const availableItems = collection.items.filter((item) => !tagsInput.value.includes(item));

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
              <Combobox.Empty>No frameworks found. Try a different search.</Combobox.Empty>
              {availableItems.map((item) => (
                <Combobox.Item item={item} key={item}>
                  {item}
                </Combobox.Item>
              ))}
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Root>
      </Field>
    );
  },
});

export const MaxLength = meta.story({
  render: () => (
    <Field>
      <Field.Label>Frameworks (max 10 chars)</Field.Label>
      <TagsInput className="w-full" defaultValue={["React"]} maxLength={10}>
        <TagsInput.Context>
          {({ value }) =>
            value.map((tag, index) => (
              <TagsInput.Item index={index} key={tag} value={tag}>
                {tag}
              </TagsInput.Item>
            ))
          }
        </TagsInput.Context>
      </TagsInput>
    </Field>
  ),
});

export const MaxWithOverflow = meta.story({
  render: () => (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput allowOverflow className="w-full" defaultValue={["React", "Solid", "Vue"]} max={3}>
        <TagsInput.Context>
          {({ value }) =>
            value.map((tag, index) => (
              <TagsInput.Item index={index} key={tag} value={tag}>
                {tag}
              </TagsInput.Item>
            ))
          }
        </TagsInput.Context>
      </TagsInput>
    </Field>
  ),
});

export const ControlledInputValue = meta.story({
  render: () => {
    const [inputValue, setInputValue] = useState("");

    return (
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => setInputValue("React")} size="sm" variant="outline">
            Set &quot;React&quot;
          </Button>
          <Button onClick={() => setInputValue("")} size="sm" variant="outline">
            Clear
          </Button>
        </div>
        <Field>
          <Field.Label>Frameworks</Field.Label>
          <TagsInput
            className="w-full"
            defaultValue={["React"]}
            inputValue={inputValue}
            onInputValueChange={(details) => setInputValue(details.inputValue)}
          >
            <TagsInput.Context>
              {({ value }) =>
                value.map((tag, index) => (
                  <TagsInput.Item index={index} key={tag} value={tag}>
                    {tag}
                  </TagsInput.Item>
                ))
              }
            </TagsInput.Context>
          </TagsInput>
        </Field>
      </div>
    );
  },
});

export const Controlled = meta.story({
  render: () => {
    const initialValue = ["React", "Solid"];
    const [value, setValue] = useState(initialValue);

    return (
      <Field>
        <Field.Label>Frameworks</Field.Label>
        <TagsInput className="w-full" onValueChange={setValue} value={value}>
          <TagsInput.Context>
            {({ value }) =>
              value.map((tag, index) => (
                <TagsInput.Item index={index} key={tag} value={tag}>
                  {tag}
                </TagsInput.Item>
              ))
            }
          </TagsInput.Context>
        </TagsInput>
      </Field>
    );
  },
});
