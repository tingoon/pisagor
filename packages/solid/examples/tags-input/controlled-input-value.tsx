/** @jsxImportSource solid-js */

import { Button, Field, TagsInput } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function ControlledInputValue() {
  const [inputValue, setInputValue] = createSignal("");

  return (
    <div class="flex flex-col gap-3">
      <div class="flex flex-wrap gap-2">
        <Button
          onClick={() => setInputValue("React")}
          size="sm"
          variant="outline"
        >
          Set &quot;React&quot;
        </Button>
        <Button onClick={() => setInputValue("")} size="sm" variant="outline">
          Clear
        </Button>
      </div>
      <Field>
        <Field.Label>Frameworks</Field.Label>
        <TagsInput
          class="w-full"
          defaultValue={["React"]}
          inputValue={inputValue()}
          onInputValueChange={(details) => setInputValue(details.inputValue)}
        >
          <TagsInput.Context>
            {({ value }) =>
              value.map((tag, index) => (
                <TagsInput.Item index={index} value={tag}>
                  {tag}
                </TagsInput.Item>
              ))
            }
          </TagsInput.Context>
        </TagsInput>
      </Field>
    </div>
  );
}
