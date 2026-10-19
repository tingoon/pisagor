import TextareaShorthand from "./textarea.svelte";
import TextareaClearableRoot from "./textarea-clearable-root.svelte";
import TextareaGroup from "./textarea-group.svelte";
import TextareaRoot from "./textarea-root.svelte";

export const Textarea = Object.assign(TextareaShorthand, {
  ClearableRoot: TextareaClearableRoot,
  Group: TextareaGroup,
  Root: TextareaRoot,
});
