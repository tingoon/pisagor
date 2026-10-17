import source from "./paste-behavior.tsx?raw";
import { Field, TagsInput } from "@pisagor/react";
export function PasteBehavior() {
  return (
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
  );
}

export { source as PasteBehaviorSource };
