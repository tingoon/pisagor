import { Button, Field } from "@pisagor/react";
import { useState } from "react";
import { TagsInput } from "..";
export function ControlledInputValue() {
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
}
