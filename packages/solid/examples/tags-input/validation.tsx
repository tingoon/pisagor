import { Field, TagsInput } from "@pisagor/solid";
import { For } from "solid-js";

export function Validation() {
  const validTagPattern = /^[a-zA-Z0-9-]+$/;
  return (
    <Field>
      <Field.Label>Min 3 chars, alphanumeric + hyphen</Field.Label>
      <TagsInput
        class="w-full"
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
          {(api) => (
            <For each={api().value}>
              {(tag, index) => (
                <TagsInput.Item index={index()} value={tag}>
                  {tag}
                </TagsInput.Item>
              )}
            </For>
          )}
        </TagsInput.Context>
      </TagsInput>
    </Field>
  );
}
